const BASE_URL = "https://dummyjson.com/products";

// --- Types ---

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    thumbnail: string;
    images: string[];
    rating: number;
    stock: number;
}

interface ProductsResponse {
    products: Product[];
    total: number;
}

// --- Fetch functions ---

export async function getProducts(): Promise<ProductsResponse> {
    const res = await fetch(BASE_URL, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
}

export async function searchProducts(query: string): Promise<ProductsResponse> {
    const res = await fetch(`${BASE_URL}/search?q=${encodeURIComponent(query)}`, {
        next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Failed to search products");
    return res.json();
}

export async function getProductsByCategory(category: string): Promise<ProductsResponse> {
    const res = await fetch(`${BASE_URL}/category/${encodeURIComponent(category)}`, {
        next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("Failed to fetch products by category");
    return res.json();
}

export async function getCategories(): Promise<string[]> {
    const res = await fetch(`${BASE_URL}/category-list`, { next: { revalidate: 86400 } });
    if (!res.ok) throw new Error("Failed to fetch categories");
    return res.json();
}

export async function getProductById(id: number): Promise<Product> {
    const res = await fetch(`${BASE_URL}/${id}`, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error("Failed to fetch product");
    return res.json();
}
