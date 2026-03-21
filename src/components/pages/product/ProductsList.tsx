/**
 * ProductsList — server component responsible for data fetching.
 *
 * WHY a server component here?
 * ----------------------------
 * Fetching happens on the server, so:
 *  - No loading spinners needed for initial data
 *  - API keys / sensitive logic never reach the browser
 *  - Next.js caches the fetch result (revalidate: 3600)
 *
 * HOW search/filter works end-to-end:
 * ------------------------------------
 * 1. User types in SearchBar or picks a category in ProductFilter
 * 2. nuqs updates the URL: /product?search=foo  or  /product?category=beauty
 * 3. Next.js detects the URL change and re-renders this server component
 * 4. page.tsx reads the new searchParams and passes them here as props
 * 5. We call the matching API endpoint and pass results to ProductsClient
 */

import SectionWrapper from "@/components/common/SectionWrapper";
import {
  getProducts,
  searchProducts,
  getProductsByCategory,
  getCategories,
} from "@/lib/services/productService";
import ProductsClient from "@/components/pages/product/ProductsClient";

interface Props {
  search?: string;
  category?: string;
}

export default async function ProductsListSection({ search, category }: Props) {
  /**
   * Fetch products and categories in parallel with Promise.all.
   * - If ?search=x   → hit /products/search?q=x
   * - If ?category=y → hit /products/category/y
   * - Otherwise      → hit /products (all)
   *
   * Categories are always fetched so the filter dropdown is always populated.
   */
  const [data, categories] = await Promise.all([
    search
      ? searchProducts(search)
      : category
        ? getProductsByCategory(category)
        : getProducts(),
    getCategories(),
  ]);

  return (
    <SectionWrapper>
      {/* Pass server-fetched data down to the client shell */}
      <ProductsClient
        products={data.products}
        total={data.total}
        categories={categories}
      />
    </SectionWrapper>
  );
}
