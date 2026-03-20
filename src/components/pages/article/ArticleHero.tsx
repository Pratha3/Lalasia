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
import { articleimage } from "@/lib/data/article";
import Image from "next/image";

export default function ArticleHero() {
    return (
        <SectionWrapper>
            <div className="details">
                <h1 className="text-2xl md:text-5xl font-bold leading-tight text-center">
                    Article
                </h1>
                <p className="mt-3 text-center section-desc max-w-lg mx-auto text-sm md:text-xl text-muted-foreground">
                    We display products based on the latest products we have, if you
                    want to see our old products please enter the name of the item
                </p>
            </div>
            <div className="relative">
                <Carousel opts={{ align: "start", loop: true }}>
                    <CarouselContent>
                        {articleimage.map((i) => (
                            <CarouselItem key={i.id} className="pl-4 basis-3/3">
                                <div className="relative min-h-64 md:min-h-100 mt-10">
                                    <Image
                                        src={i.img}
                                        alt={i.name}
                                        fill
                                        className="object-cover"
                                        sizes="100vw"
                                    />
                                    <CarouselDots className="absolute left-1/2 transform -translate-x-1/2 bottom-15 z-30" />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent z-0" />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-3" />
                    <CarouselNext className="right-3" />
                </Carousel>
                <div className="mx-2 md:mx-10 -mt-10 relative z-10 bg-card shadow-lg px-3 py-3">
                    <div className="bg-card p-3 md:m-5 min-h-40">
                        <Badge className="bg-brand">Tips and Tricks</Badge>
                        <h1 className="mt-3 text-sm md:text-2xl font-bold leading-snug">
                            This 400-Square-Foot New York Apartment Is Maximized With Custom Millwork
                        </h1>
                        <div className="flex items-center gap-3 mt-2">
                            <div className="relative w-5 h-5 shrink-0">
                                <Image
                                    src="/assets/img/Rectangle 23 (15).png"
                                    alt="author"
                                    fill
                                    sizes="20px"
                                    className="object-cover rounded-full"
                                />
                            </div>
                            <span className="text-xs text-muted-foreground">By Morgan Depp</span>
                            <span className="text-xs text-muted-foreground/40">·</span>
                            <span className="text-xs text-muted-foreground md:block hidden">
                                Tuesday, 12 May 2022
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
