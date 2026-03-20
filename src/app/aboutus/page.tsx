import CTASection from "@/components/common/CTASection";
import AboutHero from "@/components/pages/aboutus/AboutHero";
import AboutMission from "@/components/pages/aboutus/AboutMission";
import AboutTeam from "@/components/pages/aboutus/AboutTeam";

export default function AboutUs() {
  return (
    <>
      <AboutHero />
      <AboutMission />
      <AboutTeam />
      <CTASection title="Are you interested work with us?" btnName="Let's talk" />
    </>
  );
}
