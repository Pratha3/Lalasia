import FeatureCard from "@/components/common/FeatureCard";
import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import { features } from "@/lib/data/about";
import { stats } from "@/lib/data/home";

export default function AboutMission() {
    return (
        <SectionWrapper>
            <div className="grid grid-cols-1 gap-3 md:grid md:grid-cols-2">
                <div className="gap-3">
                    <SectionHeading
                        label="Our Mission"
                        title="Our team dedicated to help find smart home product"
                    />
                    <div className="flex gap-10 md:mt-2">
                        {stats.map((s) => (
                            <div key={s.label} className="text-center">
                                <p className="text-2xl font-bold">{s.value}</p>
                                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="gap-3">
                    <div className="grid grid-cols-1 grid-rows-3">
                        {features.map((f) => (
                            <FeatureCard key={f.title} {...f} />
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
