import Image from "next/image";

interface ArticleDetailHeroProps {
    img: string;
    title: string;
}

export default function ArticleDetailHero({ img, title }: ArticleDetailHeroProps) {
    return (
        <section className="mt-16 mx-auto max-w-7xl px-4 md:px-10">
            <div className="details">
                <h1 className="text-2xl md:text-5xl font-bold leading-tight text-center">
                    {title}
                </h1>
                <p className="mt-3 text-center section-desc max-w-lg mx-auto text-sm md:text-xl text-muted-foreground">
                    The product crafted by talented crafter and using high quality
                    material with love inside
                </p>
            </div>
            <div className="relative h-full min-h-64 md:min-h-100 my-10">
                <Image
                    src={img}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
            </div>
        </section>
    );
}
