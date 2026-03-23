"use client";

import { Search } from "lucide-react";
import { useQueryState, parseAsString } from "nuqs";
import { useState } from "react";

interface SearchBarProps {
    placeholder?: string;
}

export default function SearchBar({ placeholder = "Search..." }: SearchBarProps) {
    const [inputValue, setInputValue] = useState("");

    const [, setSearch] = useQueryState(
        "search",
        parseAsString.withOptions({ shallow: false, history: "replace" })
    );

    const handleSubmit = () => {
        // null removes ?search from URL, empty input = show all products
        setSearch(inputValue.trim() || null);
    };

    const handleChange = (value: string) => {
        setInputValue(value);
        // If user clears the input, immediately reset search results
        if (value === "") {
            setSearch(null);
        }
    };

    return (
        <div className="w-full flex items-center flex-1 border border-border bg-background shadow-md overflow-hidden">
            <Search className="ml-4 text-muted-foreground w-4 h-4 shrink-0" />
            <input
                type="text"
                value={inputValue}
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
