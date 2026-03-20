"use client";
import SectionWrapper from "@/components/common/SectionWrapper";
import { Badge } from "@/components/ui/badge";
import {
    Carousel,
    CarouselContent,
    CarouselDots,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { productImage } from "@/lib/data/products";
import Image from "next/image";

export default function ProductHero() {
    return (
        <SectionWrapper>
            <div className="details">
                <h1 className="text-2xl md:text-5xl font-bold leading-tight text-center">
                    Products
                </h1>
                <p className="mt-3 text-center section-desc max-w-lg mx-auto text-sm md:text-xl text-muted-foreground">
                    We display products based on the latest products we have, if you
                    want to see our old products please enter the name of the item
                </p>
            </div>
            <div className="relative">
                <Carousel opts={{ align: "start", loop: true }}>
                    <CarouselContent>
                        {productImage.map((i) => (
                            <CarouselItem key={i.id} className="pl-4 basis-3/3">
                                <div className="relative min-h-64 md:min-h-100 mt-10">
                                    <Image
                                        src={i.img}
                                        alt={i.name}
                                        fill
                                        className="object-cover"
                                        sizes="100vw"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent z-0" />
                                    <div className="absolute top-18 md:top-30 left-6 md:left-10 p-4 md:p-6 text-white">
                                        <Badge className="bg-brand">{i.badge}</Badge>
                                        <h1 className="mt-3 text-2xl md:text-4xl font-bold leading-snug">
                                            {i.heading}
                                        </h1>
                                        <p className="mt-1 text-xs text-white/70">{i.details}</p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-3" />
                    <CarouselNext className="right-3" />
                    <CarouselDots className="pb-2" />
                </Carousel>
            </div>
        </SectionWrapper>
    );
}
