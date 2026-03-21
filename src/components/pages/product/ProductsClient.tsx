"use client";

/**
 * ProductsClient — client shell that composes SearchBar + ProductFilter + grid.
 *
 * This component is intentionally thin. It receives already-fetched data from
 * the server component (ProductsList) and just renders it.
 *
 * The search/filter state lives in the URL (managed by nuqs), NOT in this
 * component. So there's no useState for query/category here — nuqs handles
 * that inside SearchBar and ProductFilter directly.
 *
 * Data flow:
 *   URL params (?search=x&category=y)
 *       → page.tsx reads them as searchParams (server)
 *       → ProductsList fetches the right data from API (server)
 *       → ProductsClient receives and renders the result (client)
 */

import Link from "next/link";
import { CgSortAz } from "react-icons/cg";
import ProductCard from "@/components/common/ProductCard";
import SearchBar from "@/components/common/SearchBar";
import ProductFilter from "@/components/pages/product/ProductFilter";
import { Product } from "@/lib/services/productService";

interface ProductsClientProps {
    products: Product[];
    total: number;
    categories: string[];
}

export default function ProductsClient({ products, total, categories }: ProductsClientProps) {
    return (
        <>
            {/* Search & Filter bar — each manages its own URL param via nuqs */}
            <div className="flex flex-col sm:flex-row mt-8 mb-5 gap-2">
                <SearchBar placeholder="Search product" />
                <ProductFilter categories={categories} />
            </div>

            {/* Header — total reflects the server-filtered count, not client-side */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl md:text-3xl font-bold leading-tight m-2">
                    Total Products
                    <span className="text-brand text-sm ml-2">{total}</span>
                </h2>
                <span className="hidden md:flex items-center gap-1 mt-3 text-sm cursor-pointer text-muted-foreground">
                    <CgSortAz className="text-2xl" />
                    Sort
                </span>
            </div>

            {/* Product grid — rendered from server-fetched, already-filtered data */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                {products.map((p) => (
                    <Link href={`/product/${p.id}`} key={p.id}>
                        <ProductCard
                            category={p.category}
                            title={p.title}
                            desc={p.description}
                            price={p.price}
                            img={p.thumbnail}
                        />
                    </Link>
                ))}
            </div>
        </>
    );
}
