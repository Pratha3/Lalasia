"use client";

// ArticleList — tab filter + load more, state managed via nuqs (URL params)
//
// ?tab=   → active category filter (default: "All")
// ?count= → how many articles to show (default: 4, increases on "Load More")
//
// WHY nuqs here?
// - Tab and count live in the URL so the page is shareable/bookmarkable
// - Refreshing the page keeps the same tab and scroll position

import { useQueryState, parseAsString, parseAsInteger } from "nuqs";
import Link from "next/link";
import ArticleCard from "@/components/common/ArticleCard";
import { articles, categories } from "@/lib/data/article";

const PAGE_SIZE = 4; // articles shown initially and added on each "Load More"

export default function ArticleList() {
    // ?tab= — active category, defaults to "All"
    const [tab, setTab] = useQueryState(
        "tab",
        parseAsString.withDefault("All").withOptions({ history: "replace" })
    );

    // ?count= — how many articles to show, increases on load more
    const [count, setCount] = useQueryState(
        "count",
        parseAsInteger.withDefault(PAGE_SIZE).withOptions({ history: "replace" })
    );

    // Filter articles by selected tab
    const filtered = tab === "All"
        ? articles
        : articles.filter((a) => a.category === tab);

    // Slice to current count
    const visible = filtered.slice(0, count);
    const hasMore = count < filtered.length;

    return (
        <div>
            {/* Tab filter */}
            <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => {
                            setTab(cat === "All" ? null : cat); // null removes ?tab= from URL
                            setCount(PAGE_SIZE);                // reset count when tab changes
                        }}
                        className={`px-4 py-2 text-sm border transition-colors ${tab === cat || (cat === "All" && tab === "All")
                                ? "bg-brand text-white border-brand"
                                : "border-border text-muted-foreground hover:bg-muted"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Article grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {visible.map((a) => (
                    <Link href={`/article/${a.slug}`} key={a.id}>
                        <ArticleCard {...a} variant="vertical" />
                    </Link>
                ))}
            </div>

            {/* Load More button — increases ?count= by PAGE_SIZE */}
            {hasMore && (
                <div className="flex justify-center mt-10">
                    <button
                        onClick={() => setCount(count + PAGE_SIZE)}
                        className="px-8 py-3 text-sm border border-brand text-brand hover:bg-brand hover:text-white transition-colors"
                    >
                        Load More
                    </button>
                </div>
            )}

            {/* No results */}
            {visible.length === 0 && (
                <p className="text-center text-muted-foreground py-10">No articles found.</p>
            )}
        </div>
    );
}
