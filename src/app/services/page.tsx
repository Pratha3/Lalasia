import CTASection from "@/components/common/CTASection";
import ServicesHero from "@/components/pages/services/ServicesHero";
import ServicesInfo from "@/components/pages/services/ServicesInfo";
import ServicesPortfolio from "@/components/pages/services/ServicesPortfolio";

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesInfo />
      <ServicesPortfolio />
      <CTASection title="Are you interested work with us?" btnName="Let's talk" />
    </>
  );
}
