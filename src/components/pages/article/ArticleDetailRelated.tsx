import ArticleCard from "@/components/common/ArticleCard";
import SectionHeading from "@/components/common/SectionHeading";
import { articles } from "@/lib/data/article";

export default function ArticleDetailRelated() {
    return (
        <section className="mt-16 mx-auto max-w-7xl px-4 md:px-10 pb-16">
            <SectionHeading
                label="Similar Topics"
                title="Maybe you're interested"
                center
            />
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {articles.map((a) => (
                    <ArticleCard key={a.id} {...a} variant="vertical" />
                ))}
            </div>
        </section>
    );
}
