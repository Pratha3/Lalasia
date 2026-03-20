
import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { reviews } from "@/lib/data/home";
import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa6";


export default function TestimonialsSection() {
  return (
    <>
      <SectionWrapper>
        <div>
          <div className="text-center mb-12">
            <SectionHeading
              label="Testimonials"
              title="What our customer say"
              desc="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient."
              center
            />
          </div>
          <Carousel
            opts={{ loop: false, align: "start", containScroll: "trimSnaps" }}
            className="relative"
          >
            <CarouselContent className="flex gap-6 ">
              {reviews.map((r) => (
                <CarouselItem
                  key={r.id}
                  className="flex justify-center items-stretch basis-3/3 md:basis-1/3"
                >
                  <div className="w-full md:w-3xl border border-border bg-card dark:bg-card p-6 shadow-sm transition-colors">
                    <div className="text-brand text-3xl font-serif leading-none mb-4">
                      <FaQuoteLeft />
                    </div>
                    <p className="section-desc">{r.desc}</p>
                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center gap-3">
                        <div className="relative w-9 h-9 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 shrink-0">
                          <Image
                            src={r.img}
                            alt={r.name}
                            fill
                            sizes="36px"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium dark:text-white">
                            {r.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {r.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-400 w-3 h-3" />
                        <span className="text-sm font-medium dark:text-white">
                          {r.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselDots />
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
          </Carousel>
        </div>
      </SectionWrapper>
    </>
  );
}
