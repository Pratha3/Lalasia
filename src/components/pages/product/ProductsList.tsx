import ProductCard from "@/components/common/ProductCard";
import SectionWrapper from "@/components/common/SectionWrapper";
import { getProducts } from "@/lib/services/productService";
import { CgSortAz } from "react-icons/cg";
import { CiFilter } from "react-icons/ci";
import { Search } from "lucide-react";
import Link from "next/link";

export default async function ProductsListSection() {
  const { products, total } = await getProducts(30);

  return (
    <SectionWrapper>
      {/* Search & Filter bar */}
      <div className="flex flex-col sm:flex-row mt-8 mb-5 gap-2">
        <div className="w-full flex items-center flex-1 border border-border bg-background shadow-md overflow-hidden">
          <Search className="ml-4 text-muted-foreground w-4 h-4 shrink-0" />
          <input
            type="text"
            placeholder="Search product"
            className="flex-1 px-3 py-3 text-sm focus:outline-none bg-transparent placeholder:text-muted-foreground"
          />
          <button className="p-3 md:px-5 py-3 text-sm text-white bg-brand hover:opacity-90 transition-colors shrink-0">
            Search
          </button>
        </div>
        <div className="border border-border bg-background shadow-md">
          <button className="w-full sm:w-auto px-4 py-3 flex items-center justify-center gap-1 text-sm text-muted-foreground hover:bg-muted transition-colors h-full">
            <CiFilter className="text-xl" />
            Filter
          </button>
        </div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl md:text-3xl font-bold leading-tight m-2">
          Total Products
          <span className="text-brand text-sm ml-2">{total}</span>
        </h2>
        <span className="hidden md:flex items-center gap-1 mt-3 text-sm cursor-pointer text-muted-foreground">
          <CgSortAz className="text-2xl" />
          Sort
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {products.map((p) => (
          <Link href={`/product/${p.id}`} key={p.id}>
            <ProductCard
              category={p.category}
              title={p.title}
              desc={p.description}
              price={p.price}
              img={p.thumbnail}
            />
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}
