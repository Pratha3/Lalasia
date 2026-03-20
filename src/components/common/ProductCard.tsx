import Image from "next/image";

interface ProductCardProps {
    category: string;
    title: string;
    desc: string;
    price: string | number;
    img: string;
}

export default function ProductCard({ category, title, desc, price, img }: ProductCardProps) {
    const displayPrice = typeof price === "number" ? `$${price.toFixed(2)}` : price;

    return (
        <div>
            <div className="relative w-full aspect-4/3 overflow-hidden bg-muted">
                <Image src={img} alt={title} fill className="object-cover" sizes="300px" />
            </div>
            <div className="mt-3 px-1">
                <span className="text-xs text-muted-foreground capitalize">{category}</span>
                <h3 className="text-sm font-semibold mt-0.5 line-clamp-1">{title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{desc}</p>
                <p className="text-sm font-bold mt-2">{displayPrice}</p>
            </div>
        </div>
    );
}
