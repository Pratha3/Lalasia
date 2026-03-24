"use client";

import { useQueryState, parseAsInteger } from "nuqs";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

export default function ProductPagination({ total, pageSize }: { total: number; pageSize: number }) {
    const totalPages = Math.ceil(total / pageSize);

    const [page, setPage] = useQueryState(
        "page",
        parseAsInteger.withDefault(1).withOptions({ shallow: false, history: "replace" })
    );

    if (totalPages <= 1) return null;

    // Clamp to valid range in case of invalid ?page= in URL
    const safePage = Math.min(Math.max(1, page), totalPages);

    const goTo = (p: number) => {
        const clamped = Math.min(Math.max(1, p), totalPages);
        setPage(clamped === 1 ? null : clamped); // null = remove ?page= for page 1 (clean URL)
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Show 5 page buttons max, centered around current page
    const start = Math.max(1, safePage - 2);
    const end = Math.min(totalPages, safePage + 2);
    const visiblePages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

    const showStartEllipsis = visiblePages[0] > 2;
    const showEndEllipsis = visiblePages[visiblePages.length - 1] < totalPages - 1;

    return (
        <Pagination className="mt-10">
            <PaginationContent>

                <PaginationItem>
                    <PaginationPrevious
                        onClick={(e) => { e.preventDefault(); goTo(safePage - 1); }}
                        aria-disabled={safePage <= 1}
                        className={safePage <= 1 ? "pointer-events-none opacity-40" : "cursor-pointer"}
                    />
                </PaginationItem>

                {/* First page button if not in visible range */}
                {visiblePages[0] > 1 && (
                    <PaginationItem>
                        <PaginationLink onClick={(e) => { e.preventDefault(); goTo(1); }} isActive={safePage === 1} className="cursor-pointer">1</PaginationLink>
                    </PaginationItem>
                )}
                {showStartEllipsis && <PaginationItem><PaginationEllipsis /></PaginationItem>}

                {/* Visible page range */}
                {visiblePages.map((p) => (
                    <PaginationItem key={p}>
                        <PaginationLink onClick={(e) => { e.preventDefault(); goTo(p); }} isActive={p === safePage} className="cursor-pointer">
                            {p}
                        </PaginationLink>
                    </PaginationItem>
                ))}

                {/* Last page button if not in visible range */}
                {showEndEllipsis && <PaginationItem><PaginationEllipsis /></PaginationItem>}
                {visiblePages[visiblePages.length - 1] < totalPages && (
                    <PaginationItem>
                        <PaginationLink onClick={(e) => { e.preventDefault(); goTo(totalPages); }} isActive={safePage === totalPages} className="cursor-pointer">{totalPages}</PaginationLink>
                    </PaginationItem>
                )}

                <PaginationItem>
                    <PaginationNext
                        onClick={(e) => { e.preventDefault(); goTo(safePage + 1); }}
                        aria-disabled={safePage >= totalPages}
                        className={safePage >= totalPages ? "pointer-events-none opacity-40" : "cursor-pointer"}
                    />
                </PaginationItem>

            </PaginationContent>
        </Pagination>
    );
}
