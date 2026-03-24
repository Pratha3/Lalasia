"use client";

import { CiFilter } from "react-icons/ci";
import { useQueryState, parseAsString, parseAsInteger } from "nuqs";
import { useState, useEffect, useRef } from "react";

interface ProductFilterProps {
    categories: string[];
}

export default function ProductFilter({ categories }: ProductFilterProps) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const [category, setCategory] = useQueryState(
        "category",
        parseAsString.withDefault("").withOptions({ shallow: false, history: "replace" })
    );

    // Clear search when category is selected — category browse replaces keyword search
    const [, setSearch] = useQueryState(
        "search",
        parseAsString.withOptions({ shallow: false, history: "replace" })
    );

    const [, setPage] = useQueryState(
        "page",
        parseAsInteger.withDefault(1).withOptions({ shallow: false, history: "replace" })
    );

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (value: string) => {
        setSearch(null);           // clear search — category takes over
        setCategory(value || null);
        setPage(null);
        setOpen(false);
    };

    return (
        <div ref={ref} className="relative border border-border bg-background shadow-md">
            <button
                onClick={() => setOpen((o) => !o)}
                className="w-full sm:w-auto px-4 py-3 flex items-center justify-center gap-1 text-sm text-muted-foreground hover:bg-muted transition-colors h-full capitalize"
            >
                <CiFilter className="text-xl" />
                {category || "Filter"}
            </button>

            {open && (
                <ul className="absolute right-0 z-10 mt-1 w-48 bg-background border border-border shadow-lg max-h-60 overflow-y-auto">
                    <li
                        onClick={() => handleSelect("")}
                        className={`px-4 py-2 text-sm cursor-pointer hover:bg-muted ${!category ? "text-brand font-medium" : ""}`}
                    >
                        All Categories
                    </li>
                    {categories.map((cat) => (
                        <li
                            key={cat}
                            onClick={() => handleSelect(cat)}
                            className={`px-4 py-2 text-sm cursor-pointer hover:bg-muted capitalize ${category === cat ? "text-brand font-medium" : ""
                                }`}
                        >
                            {cat}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
