"use client";

import Link from "next/link";
import { CgSortAz } from "react-icons/cg";
import ProductCard from "@/components/common/ProductCard";
import SearchBar from "@/components/common/SearchBar";
import ProductFilter from "@/components/pages/product/ProductFilter";
import Pagination from "@/components/common/Pagination";
import { Product } from "@/lib/services/productService";

interface Props {
    products: Product[];
    total: number;
    categories: string[];
    pageSize: number;
}

export default function ProductsClient({ products, total, categories, pageSize }: Props) {
    return (
        <div>
            {/* Search & Filter */}
            <div className="flex flex-col sm:flex-row mt-8 mb-5 gap-2">
                <SearchBar placeholder="Search product" />
                <ProductFilter categories={categories} />
            </div>

            {/* Header */}
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

            {/* Product grid */}
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

            {/* Empty state */}
            {products.length === 0 && (
                <p className="text-center text-muted-foreground py-16">
                    No products found. Try a different search or filter.
                </p>
            )}

            {/* Pagination — total from API, pageSize is constant (12) */}
            <Pagination total={total} pageSize={pageSize} />
        </div>
    );
}
