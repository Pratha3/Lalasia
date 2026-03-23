"use client";

// Pagination component — updates ?page= in the URL via nuqs
// nuqs triggers a server re-fetch with the new page number

import { useQueryState, parseAsInteger } from "nuqs";

interface PaginationProps {
    total: number;      // total number of items from API
    pageSize: number;   // how many items per page
}

export default function Pagination({ total, pageSize }: PaginationProps) {
    const totalPages = Math.ceil(total / pageSize);

    // ?page= in the URL — defaults to 1 if not present
    const [page, setPage] = useQueryState(
        "page",
        parseAsInteger.withDefault(1).withOptions({ shallow: false, history: "replace" })
    );

    if (totalPages <= 1) return null; // no pagination needed for single page

    return (
        <div className="flex items-center justify-center gap-2 mt-10">
            {/* Previous button */}
            <button
                onClick={() => setPage(page - 1)}
                disabled={page <= 1}
                className="px-4 py-2 text-sm border border-border hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed"
            >
                Prev
            </button>

            {/* Page number buttons */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`px-4 py-2 text-sm border border-border hover:bg-muted ${p === page ? "bg-brand text-white border-brand" : ""
                        }`}
                >
                    {p}
                </button>
            ))}

            {/* Next button */}
            <button
                onClick={() => setPage(page + 1)}
                disabled={page >= totalPages}
                className="px-4 py-2 text-sm border border-border hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed"
            >
                Next
            </button>
        </div>
    );
}
