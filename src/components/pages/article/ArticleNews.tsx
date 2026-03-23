import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import ArticleList from "@/components/pages/article/ArticleList";

export default function ArticleNews() {
    return (
        <SectionWrapper>
            <SectionHeading label="Daily News" title="Today top headlines" />
            <div className="mt-6">
                <ArticleList />
            </div>
        </SectionWrapper>
    );
}
