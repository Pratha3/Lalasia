
import ArticleCard from "@/components/common/ArticleCard";
import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import { articles } from "@/lib/data/home";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";


export default function ArticleSection() {
  return (
    <>
      {/*  Articles  */}
      <SectionWrapper>
        <div className="mb-10">
          <SectionHeading
            label="Articles"
            title="The best furniture comes from Lalasia"
            desc="Pellentesque etiam blandit in tincidunt at donec."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Featured card */}
          <div className="relative h-80 md:h-full min-h-72">
            <Image
              src="/assets/img/Rectangle 8.png"
              alt="featured article"
              fill
              className="object-cover"
              sizes="600px"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent z-0" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1">
                Tips and Trick
              </span>
              <h3 className="mt-3 text-lg font-bold leading-snug">
                Create Cozy Dinning Room Vibes
              </h3>
              <p className="mt-1 text-xs text-white/70">
                Decorating with neutrals brings balance to the dining room...
              </p>
              <button className="mt-3 text-xs font-medium underline underline-offset-2">
                Read More
              </button>
            </div>
            <div className="absolute -bottom-3.5 right-0 hidden md:flex">
              <button className="w-10 h-10 p-2 bg-white backdrop-blur-sm flex items-center justify-center text-brand hover:bg-white/40 transition-colors">
                <ArrowLeft />
              </button>
              <button className="w-10 h-10 p-2 bg-brand backdrop-blur-sm flex items-center justify-center text-white hover:opacity-90 transition-colors">
                <ArrowRight />
              </button>
            </div>
          </div>

          {/* Article list — reusing ArticleCard */}
          <div className="flex flex-col gap-6">
            {articles.map((a) => (
              <ArticleCard key={a.id} {...a} />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
