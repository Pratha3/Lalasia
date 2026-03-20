import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import Image from "next/image";

export default function ServicesPortfolio() {
    return (
        <SectionWrapper>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8 md:mb-12 p-3">
                <div className="md:max-w-xl">
                    <SectionHeading
                        label="Portofolio"
                        title="Amazing project we've done before"
                    />
                </div>
                <p className="max-w-sm md:mt-5 text-muted-foreground p-2 md:p-4">
                    Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                    dignissim placerat nisi, adipiscing mauris non purus parturient.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 md:h-135 gap-3 p-3">
                <div className="relative min-h-72 md:min-h-0 md:col-span-1">
                    <Image
                        src="/assets/img/Rectangle 40.png"
                        alt="Siska Kohl's Bedroom"
                        fill
                        className="object-cover"
                        sizes="400px"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                        <h3 className="text-lg font-bold leading-snug">Siska Kohl&apos;s Bedroom</h3>
                        <p className="mt-1 text-xs text-white/70">
                            Decorating with neutrals brings balance to the dining room...
                        </p>
                        <button className="mt-3 text-xs font-medium">See Details</button>
                    </div>
                </div>

                <div className="grid grid-rows-2 gap-3 md:col-span-2 md:h-full">
                    <div className="relative min-h-60 md:min-h-0">
                        <Image
                            src="/assets/img/Rectangle 38 (1).png"
                            alt="Jeruk Veldevana Living Room"
                            fill
                            className="object-cover"
                            sizes="800px"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-6 text-white">
                            <h3 className="text-lg font-bold leading-snug">
                                Jeruk Veldevana Living Room Design
                            </h3>
                            <p className="mt-1 text-xs text-white/70">
                                We start renovating her bedroom with minimalist concept and
                                using combination white and wooden material
                            </p>
                            <button className="mt-3 text-xs font-medium">See Details</button>
                        </div>
                    </div>
                    <div className="relative min-h-60 md:min-h-0">
                        <Image
                            src="/assets/img/Rectangle 23 (3).png"
                            alt="Cozy Co-working space"
                            fill
                            className="object-cover"
                            sizes="800px"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-6 text-white">
                            <h3 className="text-lg font-bold leading-snug">Cozy Co-working space</h3>
                            <p className="mt-1 text-xs text-white/70">
                                Decorating with neutrals brings balance to the dining room...
                            </p>
                            <button className="mt-3 text-xs font-medium">See Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
