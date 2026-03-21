# Lalasia — Furniture Website

A Next.js 15 App Router project with server-side search and filtering powered by [nuqs](https://nuqs.47ng.com/) and [dummyjson](https://dummyjson.com/).

---

## Tech Stack

- **Next.js 15** (App Router, React Server Components)
- **TypeScript**
- **Tailwind CSS**
- **nuqs** — type-safe URL search params state management
- **dummyjson** — mock product API

---

## Folder Structure

```
src/
├── app/
│   ├── layout.tsx                   # Root layout — NuqsAdapter + ThemeProvider
│   ├── page.tsx                     # Home page
│   ├── product/
│   │   ├── page.tsx                 # Product listing — reads searchParams, wraps in Suspense
│   │   └── [slug]/page.tsx          # Product detail page
│   ├── article/
│   ├── services/
│   └── aboutus/
│
├── components/
│   ├── common/
│   │   ├── SearchBar.tsx            # Reusable search input (local state + nuqs on submit)
│   │   ├── ProductCard.tsx          # Single product card UI
│   │   ├── SectionWrapper.tsx
│   │   └── layout/
│   │       ├── Navbar.tsx
│   │       └── Footer.tsx
│   │
│   └── pages/
│       └── product/
│           ├── ProductsList.tsx     # Server component — fetches data based on URL params
│           ├── ProductsClient.tsx   # Client shell — renders grid + search + filter
│           ├── ProductFilter.tsx    # Category dropdown — syncs with ?category= via nuqs
│           ├── Productsskeleton.tsx # Skeleton shown by Suspense while fetching
│           ├── ProductHero.tsx
│           ├── ProductDetailInfo.tsx
│           └── ProductDetailRelated.tsx
│
└── lib/
    ├── services/
    │   └── productService.ts        # All API fetch functions for dummyjson
    └── data/                        # Static data files
```

---

## How Search & Filter Works

### The Pattern

State lives in the **URL** (`?search=mascara&category=beauty`), not in React memory. This means:
- URLs are shareable and bookmarkable
- Browser back/forward works naturally
- The server always has the source of truth

### SearchBar — Two-State Approach

The input uses **local `useState`** for typing, and **nuqs** only updates the URL on submit.

```
User types "mascara"
    → local inputValue updates instantly (fast, no server call)

User clicks Search or presses Enter
    → nuqs sets ?search=mascara in the URL
    → shallow: false triggers Next.js server re-render
    → Suspense shows skeleton while data loads
    → ProductsList fetches /products/search?q=mascara
    → Grid updates with results
```

Why two states? Because `shallow: false` causes a full navigation — if nuqs updated the URL on every keystroke, the component would remount and reset the input each time, making it impossible to type.

### ProductFilter — Immediate Update

Category filter updates the URL immediately on selection (no typing involved, so no remount issue).

```
User picks "beauty"
    → nuqs sets ?category=beauty in the URL
    → Server re-renders, fetches /products/category/beauty
    → Grid updates
```

### Suspense + Skeleton

`page.tsx` wraps `ProductsList` in a `<Suspense>` boundary with a `key` prop:

```tsx
<Suspense
  key={`${search}-${category}`}  // key change forces skeleton to re-show
  fallback={<ProductsSkeleton />}
>
  <ProductsListSection search={search} category={category} />
</Suspense>
```

The `key` is important — without it, Suspense only shows the skeleton on the very first load. With it, the skeleton re-appears on every new search or filter change.

---

## Key Files Explained

### `src/app/layout.tsx`

`NuqsAdapter` must wrap the entire app so `useQueryState` hooks can read/write URL params.

```tsx
import { NuqsAdapter } from "nuqs/adapters/next/app";

<NuqsAdapter>
  <NavBar />
  <main>{children}</main>
  <Footer />
</NuqsAdapter>
```

---

### `src/app/product/page.tsx`

Server component that reads `searchParams` from the URL and passes them to `ProductsList`.

```tsx
export default async function Product({ searchParams }: Props) {
  const { search, category } = await searchParams;
  return (
    <Suspense key={`${search}-${category}`} fallback={<ProductsSkeleton />}>
      <ProductsListSection search={search} category={category} />
    </Suspense>
  );
}
```

---

### `src/components/pages/product/ProductsList.tsx`

Server component that picks the right API endpoint based on which param is present.

```tsx
const [data, categories] = await Promise.all([
  search
    ? searchProducts(search)           // ?search=x  → /products/search?q=x
    : category
    ? getProductsByCategory(category)  // ?category=y → /products/category/y
    : getProducts(),                   // (none)      → /products
  getCategories(),
]);
```

---

### `src/components/common/SearchBar.tsx`

Local `useState` drives the input. nuqs only fires on submit.

```tsx
const [inputValue, setInputValue] = useState("");
const [, setSearch] = useQueryState("search", parseAsString.withOptions({
  shallow: false,
  history: "replace",
}));

// Typing → updates inputValue only (no server call)
// Submit → setSearch(inputValue) → URL updates → server re-fetches
```

---

### `src/components/pages/product/ProductFilter.tsx`

nuqs drives the category directly — no local state needed since there's no typing.

```tsx
const [category, setCategory] = useQueryState("category", parseAsString.withOptions({
  shallow: false,
  history: "replace",
}));

// Clicking a category → setCategory(value) → URL updates → server re-fetches
```

---

### `src/lib/services/productService.ts`

All dummyjson API calls with Next.js ISR caching:

| Function | Endpoint | Cache |
|---|---|---|
| `getProducts()` | `/products` | 1 hour |
| `searchProducts(q)` | `/products/search?q=` | 1 minute |
| `getProductsByCategory(cat)` | `/products/category/:cat` | 1 hour |
| `getCategories()` | `/products/category-list` | 24 hours |
| `getProductById(id)` | `/products/:id` | 1 hour |

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
