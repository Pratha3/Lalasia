import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import { team } from "@/lib/data/about";
import Image from "next/image";

export default function AboutTeam() {
    return (
        <SectionWrapper>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
                <div className="md:max-w-xs">
                    <SectionHeading
                        label="Our Team"
                        title="Meet our leading and strong team"
                    />
                </div>
                <p className="max-w-sm md:mt-5 text-muted-foreground p-2 md:p-4">
                    Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                    dignissim placerat nisi, adipiscing mauris non purus parturient.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
                {team.map((t) => (
                    <div key={t.id} className="gap-3 rounded-xl p-3">
                        <div className="relative w-full aspect-4/3 overflow-hidden">
                            <Image
                                src={t.img}
                                alt="team members"
                                fill
                                className="object-cover"
                                sizes="200px"
                            />
                        </div>
                        <h3 className="mt-3 font-semibold text-base md:mb-2">{t.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
