
import FeatureCard from "@/components/common/FeatureCard";
import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import { features } from "@/lib/data/home";


export default function BenefitSection() {
  return (
    <>
      <SectionWrapper>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
          <div className="md:max-w-xs">
            <SectionHeading
              label="Benefits"
              title="Benefits when using our services"
            />
          </div>
          <p className="max-w-sm md:mt-5 text-muted-foreground p-2 md:p-4 ">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non purus parturient.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
