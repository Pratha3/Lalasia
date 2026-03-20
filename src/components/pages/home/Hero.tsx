import SectionWrapper from "@/components/common/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      {/* Hero */}
      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-2xl md:text-5xl font-bold leading-tight">
            Discover Furniture With High Quality Wood{" "}
            <Image
              src="/assets/img/sparkles.svg"
              alt=""
              width={40}
              height={40}
              className="inline-block align-middle"
            />
          </h1>
          <p className="mt-3 max-w-lg mx-auto text-sm md:text-xl text-muted-foreground">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non. Purus parturient
            viverra nunc, tortor sit laoreet. Quam tincidunt aliquam adipiscing
            tempor.
          </p>
        </div>

        <div className="relative mt-8 md:mt-10">
          <div className="absolute -top-5 left-0 right-0 z-10 flex justify-center px-4">
            <div className="relative flex items-center w-full max-w-xl bg-background border border-border shadow-lg overflow-visible">
              <div className="absolute -left-13 md:-left-42 -top-45 md:-top-49 w-20 h-15 md:h-full md:w-full">
                <Image
                  src="/assets/img/arrow.svg"
                  alt=""
                  width={250}
                  height={250}
                  className="opacity-90"
                />
              </div>

              <Search className="ml-4 text-muted-foreground w-4 h-4 shrink-0" />
              <input
                type="text"
                placeholder="Search property"
                className="h-10 w-10 flex-1 px-3 py-3 text-sm focus:outline-none bg-transparent placeholder:text-muted-foreground"
              />
              <Button className="px-6 py-2 rounded-none bg-brand shrink-0 m-1">
                Search
              </Button>
            </div>
          </div>

          {/* Hero image */}
          <Image
            src="/assets/img/Rectangle 2.svg"
            alt="hero room"
            width={1200}
            height={520}
            className="w-full object-cover"
            priority
          />
        </div>
      </SectionWrapper>
    </>
  );
}
