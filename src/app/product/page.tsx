import { Suspense } from "react";
import ProductHero from "@/components/pages/product/ProductHero";
import ProductsListSection from "@/components/pages/product/ProductsList";

interface Props {
  searchParams: Promise<{ search?: string; category?: string; page?: string }>;
}

export default async function Product({ searchParams }: Props) {
  const { search, category, page } = await searchParams;
  const pageNumber = Number(page) || 1;

  return (
    <>
      <ProductHero />
      <Suspense
        key={`${search ?? ""}-${category ?? ""}-${pageNumber}`}
        fallback={<div className="max-w-7xl mx-auto px-4 py-10 text-muted-foreground text-sm">Loading...</div>}
      >
        <ProductsListSection search={search} category={category} page={pageNumber} />
      </Suspense>
    </>
  );
}
