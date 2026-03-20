import Image from "next/image";

const footerLinks: Record<string, string[]> = {
  Product: ["New Arrivals", "Best Selling", "Home Decor", "Kitchen Set"],
  Services: ["Catalog", "Blog", "FaQ", "Pricing"],
  "Follow Us": ["Facebook", "Instagram", "Twitter"],
};

export default function Footer() {
  return (
    <>
      <footer className="bg-background transition-colors">
        <hr className="mt-10 border-border max-w-7xl mx-auto" />
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row md:justify-between gap-10">
            {/* Brand */}
            <div className="max-w-xs">
              <div className="flex items-center gap-2 mb-3">
                <Image src="/logo.svg" height={28} width={28} alt="Lalasia logo" />
                <span className="text-lg font-bold">Lalasia</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Lalasia is digital agency that help you make better experience iaculis cras in.
              </p>
            </div>

            {/* Link columns */}
            <div className="flex gap-8 md:gap-16">
              {Object.entries(footerLinks).map(([heading, links]) => (
                <div key={heading}>
                  <h3 className="text-sm font-semibold mb-4">{heading}</h3>
                  <ul className="space-y-2">
                    {links.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer >
    </>
  );
}
