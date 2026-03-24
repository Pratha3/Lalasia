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

const PAGE_SIZE = 12;

// --- Fetch functions ---

export async function getProducts(page = 1): Promise<ProductsResponse> {
    const skip = (page - 1) * PAGE_SIZE;
    const res = await fetch(`${BASE_URL}?limit=${PAGE_SIZE}&skip=${skip}`, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
}

export async function searchProducts(query: string, page = 1): Promise<ProductsResponse> {
    const skip = (page - 1) * PAGE_SIZE;
    const res = await fetch(`${BASE_URL}/search?q=${encodeURIComponent(query)}&limit=${PAGE_SIZE}&skip=${skip}`, {
        next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Failed to search products");
    return res.json();
}

export async function getProductsByCategory(category: string, page = 1): Promise<ProductsResponse> {
    const skip = (page - 1) * PAGE_SIZE;
    const res = await fetch(
        `${BASE_URL}/category/${encodeURIComponent(category)}?limit=${PAGE_SIZE}&skip=${skip}`,
        { next: { revalidate: 3600 } }
    );
    if (!res.ok) throw new Error("Failed to fetch products by category");
    return res.json();
}

export { PAGE_SIZE };

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
