import { Suspense } from "react";
import ProductHero from "@/components/pages/product/ProductHero";
import ProductsListSection from "@/components/pages/product/ProductsList";
import ProductsSkeleton from "@/components/pages/product/Productsskeleton";

interface Props {
  searchParams: Promise<{ search?: string; category?: string }>;
}

export default async function Product({ searchParams }: Props) {
  const { search, category } = await searchParams;

  return (
    <>
      <ProductHero />
      {/*
        Suspense boundary wraps the server component that fetches data.
        While ProductsList is awaiting the API response, React renders
        ProductsSkeleton as the fallback — no blank screen, no layout shift.

        The key prop is critical here:
        When search or category changes, the key changes too, which forces
        React to unmount the old Suspense tree and mount a fresh one.
        This means the skeleton re-appears on every new search/filter,
        giving the user clear feedback that a fetch is in progress.
      */}
      <Suspense
        key={`${search ?? ""}-${category ?? ""}`}
        fallback={<div className="max-w-7xl mx-auto px-4"><ProductsSkeleton /></div>}
      >
        <ProductsListSection search={search} category={category} />
      </Suspense>
    </>
  );
}
