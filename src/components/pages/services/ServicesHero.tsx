import SectionWrapper from "@/components/common/SectionWrapper";
import Image from "next/image";

export default function ServicesHero() {
    return (
        <SectionWrapper>
            <div className="details">
                <h1 className="text-2xl md:text-5xl font-bold leading-tight text-center">
                    Services
                </h1>
                <p className="mt-3 text-center section-desc max-w-lg mx-auto text-sm md:text-xl text-muted-foreground">
                    The product crafted by talented crafter and using high quality
                    material with love inside
                </p>
            </div>
            <div className="relative h-full min-h-64 md:min-h-100 mx-4 md:mx-10 my-10">
                <Image
                    src="/assets/img/Rectangle 24.png"
                    alt="service img"
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
            </div>
            <hr className="mt-10 border-border" />
        </SectionWrapper>
    );
}
