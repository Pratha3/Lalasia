import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import SectionWrapper from "./SectionWrapper";
interface CTASectionProps {
  title: string;
  btnName: string;
}
export default function CTASection({ title, btnName }: CTASectionProps) {
  return (
    <SectionWrapper>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <h2 className="text-2xl md:text-4xl font-bold">{title}</h2>
        <Button className="whitespace-nowrap bg-brand">
          {btnName} <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </SectionWrapper>
  );
}
