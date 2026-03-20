"use client";
import CTASection from "@/components/common/CTASection";
import ArticleSection from "@/components/pages/home/Article";
import BenefitSection from "@/components/pages/home/Benefit";
import HeroSection from "@/components/pages/home/Hero";
import OurProductSection from "@/components/pages/home/OurProduct";
import ProductSection from "@/components/pages/home/Product";
import TestimonialsSection from "@/components/pages/home/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitSection />
      <ProductSection />
      <OurProductSection />
      <TestimonialsSection />
      <ArticleSection />
      <CTASection
        title="Join with me to get special discount"
        btnName="Learn More"
      />
    </>
  );
}
