"use client";
import { MenuIcon, Moon, Sun, XIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoBagOutline } from "react-icons/io5";

const navMenu = [
  { label: "Products", href: "/product" },
  { label: "Services", href: "/services" },
  { label: "Article", href: "/article" },
  { label: "About Us", href: "/aboutus" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />; // Placeholder to avoid layout shift
  }
  return (
    <nav className="bg-background shadow px-4 lg:px-6 py-2.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" height={32} width={32} alt="Logo" />
          <span className="text-xl font-semibold">Lalasia</span>
        </Link>

        <ul className="hidden lg:flex flex-1 justify-center items-center gap-6">
          {navMenu.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`nav-link ${pathname === item.href ? "active underline underline-offset-22 text-brand font-bold transition-all duration-100" : ""}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3 text-muted-foreground">
            <CgProfile className="h-5 w-5" />
            <IoBagOutline className="h-5 w-5" />
          </div>
          <button
            type="button"
            className="p-2 rounded-md hover:bg-muted"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-gray-600" />
            )}
          </button>

          <button
            type="button"
            className="ml-2 inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted focus:outline-none lg:hidden"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Open main menu</span>
            {open ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-200 ${open ? "max-h-96" : "max-h-0"}`}
      >
        <ul className="px-4 pt-2 pb-4 space-y-1">
          {navMenu.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`nav-link-mobile ${pathname === item.href ? "active underline underline-offset-5 text-brand font-bold transition-all duration-100" : ""}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
