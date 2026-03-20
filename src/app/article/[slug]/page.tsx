import CTASection from "@/components/common/CTASection";
import ArticleDetailBody from "@/components/pages/article/ArticleDetailBody";
import ArticleDetailHero from "@/components/pages/article/ArticleDetailHero";
import ArticleDetailRelated from "@/components/pages/article/ArticleDetailRelated";
import { articles } from "@/lib/data/article";

export default async function ArticleDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const article = articles.find(
    (p) => p.slug.toLowerCase() === slug.toLowerCase(),
  );

  if (!article) return <div className="p-10 text-center">Article Not Found</div>;

  return (
    <>
      <ArticleDetailHero img={article.img} title={article.title} />
      <ArticleDetailBody />
      <ArticleDetailRelated />
      <CTASection title="Subscribe our newsletter" btnName="Let's talk" />
    </>
  );
}
