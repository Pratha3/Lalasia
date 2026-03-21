"use client";

import { Search } from "lucide-react";
import { useQueryState, parseAsString } from "nuqs";
import { useState } from "react";

interface SearchBarProps {
    placeholder?: string;
}

export default function SearchBar({ placeholder = "Search..." }: SearchBarProps) {
    // Local state for the input — updates instantly as user types
    const [inputValue, setInputValue] = useState("");

    // nuqs state — only updates the URL when user submits (click or Enter)
    // shallow: false triggers the server component re-fetch
    const [, setSearch] = useQueryState(
        "search",
        parseAsString.withOptions({ shallow: false, history: "replace" })
    );

    const handleSubmit = () => {
        setSearch(inputValue.trim() || null);
    };

    return (
        <div className="w-full flex items-center flex-1 border border-border bg-background shadow-md overflow-hidden">
            <Search className="ml-4 text-muted-foreground w-4 h-4 shrink-0" />
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} // only updates local state
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
