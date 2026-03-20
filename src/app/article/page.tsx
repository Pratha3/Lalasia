import CTASection from "@/components/common/CTASection";
import ArticleTopicsSection from "@/components/common/ArticleTopics";
import ArticleHero from "@/components/pages/article/ArticleHero";
import ArticleNews from "@/components/pages/article/ArticleNews";

export default function Article() {
  return (
    <>
      <ArticleHero />
      <ArticleNews />
      <ArticleTopicsSection />
      <CTASection title="Subscribe our newsletter" btnName="Let's talk" />
    </>
  );
}
