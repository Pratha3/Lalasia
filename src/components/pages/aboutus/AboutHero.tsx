import SectionWrapper from "@/components/common/SectionWrapper";
import Image from "next/image";
import { FaRegCirclePlay } from "react-icons/fa6";

export default function AboutHero() {
    return (
        <SectionWrapper>
            <div className="details">
                <h1 className="text-2xl md:text-5xl font-bold leading-tight text-center">
                    About Us
                </h1>
                <p className="mt-3 text-center section-desc max-w-lg mx-auto text-sm md:text-xl text-muted-foreground">
                    We display products based on the latest products we have, if you
                    want to see our old products please enter the name of the item
                </p>
            </div>
            <div className="relative h-full min-h-64 md:min-h-100 mx-4 md:mx-10 my-10">
                <Image
                    src="/assets/img/Rectangle 40 (1).png"
                    alt="about img"
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent z-0" />
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                    <div className="text-white text-4xl md:text-6xl opacity-95">
                        <FaRegCirclePlay />
                    </div>
                </div>
                <div className="absolute left-0 right-0 bottom-2 z-20 flex justify-center">
                    <div className="w-full max-w-7xl px-4 sm:px-6">
                        <div className="relative">
                            <div className="h-1 rounded-full bg-gray-500 overflow-hidden">
                                <div className="absolute left-0 top-0 bottom-0 bg-white w-1/2 h-1" />
                            </div>
                            <div className="mt-2 flex justify-between text-xs text-white/90">
                                <span className="ml-1 px-2 py-0.5 rounded-full">01:40</span>
                                <span className="mr-1 px-2 py-0.5 rounded-full">03:52</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
