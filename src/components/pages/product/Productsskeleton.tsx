/**
 * ProductsSkeleton — shown by Suspense while ProductsList is fetching on the server.
 *
 * Matches the layout of the real grid (search bar + header + 6 cards)
 * so there's no layout shift when the real content loads.
 */
export default function ProductsSkeleton() {
    return (
        <div className="animate-pulse">
            {/* Search & filter bar skeleton */}
            <div className="flex flex-col sm:flex-row mt-8 mb-5 gap-2">
                <div className="h-12 flex-1 bg-muted rounded" />
                <div className="h-12 w-24 bg-muted rounded" />
            </div>

            {/* Header skeleton */}
            <div className="h-8 w-48 bg-muted rounded mb-6" />

            {/* Grid skeleton — 6 cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="flex flex-col gap-3">
                        <div className="aspect-4/3 w-full bg-muted rounded" />
                        <div className="h-3 w-1/3 bg-muted rounded" />
                        <div className="h-4 w-2/3 bg-muted rounded" />
                        <div className="h-3 w-1/4 bg-muted rounded" />
                    </div>
                ))}
            </div>
        </div>
    );
}
