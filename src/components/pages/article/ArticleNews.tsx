import ArticleCard from "@/components/common/ArticleCard";
import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import { articles } from "@/lib/data/article";
import Link from "next/link";

export default function ArticleNews() {
    return (
        <SectionWrapper>
            <SectionHeading label="Daily News" title="Today top headlines" />
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {articles.slice(0, 2).map((a) => (
                    <Link href={`/article/${a.slug}`} key={a.id}>
                        <ArticleCard {...a} variant="vertical" />
                    </Link>
                ))}
            </div>
        </SectionWrapper>
    );
}
