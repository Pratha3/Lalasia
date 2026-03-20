import ProductCard from "@/components/common/ProductCard";
import SectionWrapper from "@/components/common/SectionWrapper";
import { getProducts } from "@/lib/services/productService";
import Link from "next/link";

interface ProductDetailRelatedProps {
    currentId: number;
}

export default async function ProductDetailRelated({ currentId }: ProductDetailRelatedProps) {
    const { products } = await getProducts(7);
    const related = products.filter((p) => p.id !== currentId).slice(0, 6);

    return (
        <SectionWrapper>
            <h2 className="text-2xl md:text-4xl font-bold mb-8">Related Items</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {related.map((p) => (
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
