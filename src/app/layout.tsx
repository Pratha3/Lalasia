import NavBar from "@/components/common/layout/Navbar";
import Footer from "@/components/common/layout/Footer";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
          <NavBar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
