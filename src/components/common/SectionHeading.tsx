interface SectionHeadingProps {
    label: string;
    title: string;
    desc?: string;
    center?: boolean;
}

export default function SectionHeading({ label, title, desc, center }: SectionHeadingProps) {
    return (
        <div className={center ? "text-center" : ""}>
            <span className="section-label text-label p-2">{label}</span>
            <h2 className="section-title text-2xl md:text-4xl p-2 font-bold">{title}</h2>
            {desc && (
                <p className={`section-desc ${center ? "max-w-md mx-auto text-muted-foreground p-2" : "max-w-sm text-muted-foreground p-2"}`}>{desc}</p>
            )}
        </div>
    );
}
