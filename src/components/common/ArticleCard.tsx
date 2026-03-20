import Image from "next/image";

interface ArticleCardProps {
  category: string;
  title: string;
  desc: string;
  author: string;
  date: string;
  authorImg: string;
  img: string;
  variant?: "horizontal" | "vertical";
}

export default function ArticleCard({
  category,
  title,
  desc,
  author,
  date,
  authorImg,
  img,
  variant = "horizontal",
}: ArticleCardProps) {
  const authorData = (
    <div className="flex items-center gap-2 mt-2">
      <div className="relative w-5 h-5 rounded-full overflow-hidden bg-muted shrink-0">
        <Image
          src={authorImg}
          alt={author}
          fill
          sizes="20px"
          className="object-cover"
        />
      </div>
      <span className="text-xs text-muted-foreground">{author}</span>
      <span className="text-xs text-muted-foreground/50">·</span>
      <span className="text-xs text-muted-foreground hidden md:block">
        {date}
      </span>
    </div>
  );

  if (variant === "vertical") {
    return (
      <div className="bg-card overflow-hidden shadow-sm">
        <div className="relative w-full h-48 sm:h-40 md:h-44 lg:h-52 bg-muted">
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className="p-4">
          <span className="text-xs md:text-sm text-brand">{category}</span>
          <h4 className="mt-2 text-sm md:text-2xl font-semibold leading-snug">
            {title}
          </h4>
          <p className="mt-1 text-xs md:text-sm text-muted-foreground line-clamp-2">
            {desc}
          </p>
          {authorData}
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-3 items-start">
      <div className="md:mt-1 mt-2 relative w-24 h-24 sm:w-36 sm:h-32 md:w-40 md:h-36 shrink-0 overflow-hidden bg-muted">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
          sizes="200px"
        />
      </div>
      <div className="flex-1 min-w-0">
        <span className="text-xs md:text-sm text-muted-foreground">{category}</span>
        <h4 className="text-sm md:text-base font-semibold mt-0.5 leading-snug">
          {title}
        </h4>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
          {desc}
        </p>
        {authorData}
      </div>
    </div>
  );
}
