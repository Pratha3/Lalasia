"use client";

// SearchBar — real-time URL update + debounced server fetch
//
// How it works:
// - Typing updates the URL instantly (shallow: true = no server re-render)
// - After 500ms of no typing, triggers a server fetch (shallow: false)
// - Search button / Enter key triggers fetch immediately
// - Selecting a category filter clears this input via URL change

import { Search } from "lucide-react";
import { useQueryState, parseAsString, parseAsInteger } from "nuqs";
import { useEffect, useRef } from "react";

export default function SearchBar({ placeholder = "Search..." }: { placeholder?: string }) {
    // Single state — reads from URL, updates URL on change
    const [search, setSearch] = useQueryState(
        "search",
        parseAsString.withDefault("").withOptions({ shallow: true, history: "replace" })
    );
    const [, setCategory] = useQueryState("category", parseAsString.withOptions({ shallow: false, history: "replace" }));
    const [, setPage] = useQueryState("page", parseAsInteger.withOptions({ shallow: false, history: "replace" }));

    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Debounced server fetch — fires 500ms after user stops typing
    const scheduleServerFetch = (value: string) => {
        if (debounceRef.current) clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(() => {
            // shallow: false triggers server re-render
            setSearch(value.trim() || null, { shallow: false });
            setCategory(null);
            setPage(null);
        }, 500);
    };

    const handleChange = (value: string) => {
        setSearch(value || null); // instant URL update (shallow: true from default)
        scheduleServerFetch(value);
    };

    const handleSubmit = () => {
        if (debounceRef.current) clearTimeout(debounceRef.current);
        setSearch(search.trim() || null, { shallow: false });
        setCategory(null);
        setPage(null);
    };

    useEffect(() => {
        return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
    }, []);

    return (
        <div className="w-full flex items-center flex-1 border border-border bg-background shadow-md overflow-hidden">
            <Search className="ml-4 text-muted-foreground w-4 h-4 shrink-0" />
            <input
                type="text"
                value={search}
                onChange={(e) => handleChange(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                placeholder={placeholder}
                className="flex-1 px-3 py-3 text-sm focus:outline-none bg-transparent placeholder:text-muted-foreground"
            />
            <button
                onClick={handleSubmit}
                className="p-3 md:px-5 py-3 text-sm text-white bg-brand hover:opacity-90 transition-colors shrink-0"
            >
                Search
            </button>
        </div>
    );
}
