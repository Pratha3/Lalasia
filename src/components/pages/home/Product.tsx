
import ProductCard from "@/components/common/ProductCard";
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
import { products } from "@/lib/data/home";


export default function ProductSection() {
  return (
    <>
      {/* Products */}
      <SectionWrapper>
        <div>
          <div className="text-center mb-10">
            <SectionHeading
              label="Product"
              title="Our popular product"
              desc="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient."
              center
            />
          </div>
          <div className="relative">
            <Carousel opts={{ align: "start" }} className="w-full">
              <CarouselContent className="-ml-4">
                {products.map((p) => (
                  <CarouselItem
                    key={p.id}
                    className="pl-4 basis-4/5 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                  >
                    <ProductCard {...p} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselDots />
              <CarouselPrevious className="-left-4" />
              <CarouselNext className="-right-4" />
            </Carousel>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
