import SectionWrapper from "@/components/common/SectionWrapper";
import { service } from "@/lib/data/service";

export default function ServicesInfo() {
    return (
        <SectionWrapper>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
                {service.map((s) => (
                    <div key={s.id} className="bg-card gap-3 rounded-xl m-3 p-3">
                        <div className="w-10 h-10 md:mb-4 text-center p-1 text-brand font-extrabold text-3xl">
                            {s.num}
                        </div>
                        <h3 className="font-semibold text-base md:mb-2">{s.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
