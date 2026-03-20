import SectionWrapper from "@/components/common/SectionWrapper";
import { Product } from "@/lib/services/productService";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ProductDetailInfoProps {
    product: Product;
}

export default function ProductDetailInfo({ product }: ProductDetailInfoProps) {
    return (
        <SectionWrapper>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">
                {/* Image */}
                <div className="relative w-full aspect-square overflow-hidden">
                    <Image
                        src={product.thumbnail}
                        alt={product.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />
                </div>

                {/* Info */}
                <div className="flex flex-col gap-4">
                    <span className="text-sm text-muted-foreground capitalize">{product.category}</span>
                    <h1 className="text-2xl md:text-5xl font-bold leading-tight">{product.title}</h1>
                    <p className="text-muted-foreground text-base leading-relaxed">{product.description}</p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="text-yellow-400">★</span>
                        <span>{product.rating.toFixed(1)}</span>
                        <span>·</span>
                        <span>{product.stock} in stock</span>
                    </div>

                    <div className="mt-2">
                        <p className="text-sm font-semibold mb-2">Color Options</p>
                        <div className="flex gap-2">
                            <div className="h-6 w-6 bg-black" />
                            <div className="h-6 w-6 bg-brand" />
                            <div className="h-6 w-6 bg-yellow-600/70" />
                            <div className="h-6 w-6 bg-gray-400" />
                        </div>
                    </div>

                    <p className="text-3xl font-bold text-brand mt-2">${product.price.toFixed(2)}</p>

                    <div className="flex flex-col sm:flex-row gap-3 mt-2">
                        <Button className="bg-brand flex-1">Buy Now</Button>
                        <Button variant="outline" className="flex-1">Add to Cart</Button>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
