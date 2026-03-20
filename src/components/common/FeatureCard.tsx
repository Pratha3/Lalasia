import Image from "next/image";

interface FeatureCardProps {
    title: string;
    desc: string;
    img: string;
}

export default function FeatureCard({ title, desc, img }: FeatureCardProps) {
    return (
        <div className="flex items-start gap-4 py-4 border-gray-100 dark:border-gray-800 last:border-0">
            <div className="shrink-0 w-11 h-11 rounded-full bg-brand/10 flex items-center justify-center">
                <Image src={img} alt={title} width={22} height={22} className="object-contain" />
            </div>
            <div>
                <h3 className="font-semibold text-sm md:text-base">
                    {title}
                </h3>
                <p className="mt-1 text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {desc}
                </p>
            </div>
        </div>
    );
}
