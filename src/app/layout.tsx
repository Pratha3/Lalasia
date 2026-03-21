import NavBar from "@/components/common/layout/Navbar";
import Footer from "@/components/common/layout/Footer";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
// NuqsAdapter wires up nuqs with Next.js App Router.
// It must wrap the entire app so all useQueryState hooks
// can read/write the URL search params consistently.
import { NuqsAdapter } from "nuqs/adapters/next/app";

const eudoxus = localFont({
  src: "../../public/font/EudoxusSans-Regular-BF659b6cb1d4714.ttf",
  variable: "--font-eudoxus",
});

export const metadata: Metadata = {
  title: "Lalasia - Furniture Website",
  description: "Discover furniture with high quality wood",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={eudoxus.className} suppressHydrationWarning>
      <body className="bg-background text-foreground transition-colors">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NuqsAdapter>
            <NavBar />
            <main>{children}</main>
            <Footer />
          </NuqsAdapter>
        </ThemeProvider>
      </body>
    </html>
  );
}
