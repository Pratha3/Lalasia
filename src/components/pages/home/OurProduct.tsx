
import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import { Button } from "@/components/ui/button";
import { stats } from "@/lib/data/home";
import Image from "next/image";


export default function OurProductSection() {
  return (
    <>
      {/* Our Product */}
      <SectionWrapper>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="md:max-w-xs">
            <SectionHeading
              label="Our Product"
              title="Crafted by talented and high quality material"
              desc="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient. morbi fermentum, vivamus et accumsan dui tincidunt pulvinar."
            />
            <Button className="md:mt-6 mt-3 bg-brand w-full md:max-w-30 p-2">
              Learn More
            </Button>
          </div>
          <div className="flex gap-10 md:mt-2">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-bold">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          <div className="relative w-full h-64 md:h-72 overflow-hidden">
            <Image
              src="/assets/img/unsplash_mpN7xjKQ_Ns.png"
              alt="crafted detail"
              fill
              className="object-cover"
              sizes="600px"
            />
          </div>
          <div className="relative w-full h-64 md:h-150 md:w-full md:-mt-78 overflow-hidden">
            <Image
              src="/assets/img/unsplash_376KN_ISplE.png"
              alt="crafted sofa"
              fill
              className="object-cover"
              sizes="900px"
            />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
