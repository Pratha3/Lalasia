"use client";

/**
 * ProductFilter — category dropdown that syncs with the URL via nuqs.
 *
 * HOW IT WORKS:
 * -------------
 * When a user picks a category, useQueryState sets ?category=<value> in the URL.
 * Because shallow: false is set, Next.js treats this as a real navigation —
 * the server component (ProductsList) re-runs, reads the new `category` param,
 * and fetches `/products/category/<value>` from the API.
 *
 * Selecting "All Categories" sets the value to null, which nuqs removes from
 * the URL entirely (clean URL, no ?category=).
 *
 * WHY nuqs over manual router.push?
 * ----------------------------------
 * nuqs handles the URLSearchParams serialization, null/undefined edge cases,
 * and keeps both `search` and `category` params in sync automatically —
 * you don't accidentally wipe one when updating the other.
 */

import { CiFilter } from "react-icons/ci";
import { useQueryState, parseAsString } from "nuqs";
import { useState } from "react";

interface ProductFilterProps {
    categories: string[];
}

export default function ProductFilter({ categories }: ProductFilterProps) {
    const [open, setOpen] = useState(false);

    /**
     * Mirrors the ?category= URL param.
     * When this changes, nuqs updates the URL and Next.js re-fetches server data.
     * Setting null removes the param from the URL entirely.
     */
    const [category, setCategory] = useQueryState(
        "category",
        parseAsString.withDefault("").withOptions({
            shallow: false,
            history: "replace", // replace so filter changes don't flood browser history
        })
    );

    const handleSelect = (value: string) => {
        // null removes ?category from URL; otherwise sets ?category=<value>
        setCategory(value || null);
        setOpen(false);
    };

    return (
        <div className="relative border border-border bg-background shadow-md">
            <button
                onClick={() => setOpen((o) => !o)}
                className="w-full sm:w-auto px-4 py-3 flex items-center justify-center gap-1 text-sm text-muted-foreground hover:bg-muted transition-colors h-full capitalize"
            >
                <CiFilter className="text-xl" />
                {/* Show active category name or fallback to "Filter" */}
                {category || "Filter"}
            </button>

            {open && (
                <ul className="absolute right-0 z-10 mt-1 w-48 bg-background border border-border shadow-lg max-h-60 overflow-y-auto">
                    {/* Reset option — clears the category param from URL */}
                    <li
                        onClick={() => handleSelect("")}
                        className="px-4 py-2 text-sm cursor-pointer hover:bg-muted"
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
