import { articles, categories } from "@/lib/data/article";
import { CiFilter } from "react-icons/ci";
import { Button } from "../ui/button";
import ArticleCard from "./ArticleCard";
import SectionHeading from "./SectionHeading";
import SectionWrapper from "./SectionWrapper";

export default function ArticleTopicsSection() {
  return (
    <>
      <SectionWrapper>
        <SectionHeading label="Trending Topics" title="Popular last week" />
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-6 mb-6 gap-3">
          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
            {categories.map((cat) => (
              <button key={cat}>{cat}</button>
            ))}
          </div>
          <div className="border border-border bg-background shadow-sm self-start sm:self-auto">
            <button className="px-4 py-2 flex items-center gap-1 text-sm text-muted-foreground hover:bg-muted transition-colors">
              <CiFilter className="text-lg" /> Filter
            </button>
          </div>
        </div>
        {/* Article list — reusing ArticleCard */}
        <div className="flex flex-col gap-6">
          {articles.map((a) => (
            <ArticleCard key={a.id} {...a} variant="horizontal" />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button variant="outline" className="px-8">Load More</Button>
        </div>
      </SectionWrapper>
    </>
  );
}
