"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/portfolio";
import { cn, container } from "@/lib/utils";
import { CvButton } from "./CvButton";

export function Navbar({ cvAvailable }: { cvAvailable: boolean }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link for the section currently in view.
  useEffect(() => {
    if (!isHome) return;
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // On the home page, links jump to sections; on project pages they go back home first.
  const href = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled || menuOpen
          ? "border-line/80 bg-canvas/85 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <nav className={cn(container, "flex h-16 items-center justify-between gap-4")} aria-label="Main">
        <Link
          href={isHome ? "#home" : "/"}
          className="flex items-center gap-2.5 font-semibold tracking-tight"
          onClick={() => setMenuOpen(false)}
        >
          <span className="grid size-8 place-items-center rounded-lg border border-line-strong bg-surface font-mono text-xs text-accent">
            KA
          </span>
          <span className="hidden sm:inline">{site.shortName}</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = isHome && active === link.id;
            return (
              <li key={link.id}>
                <a
                  href={href(link.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-sm transition-colors",
                    isActive ? "bg-elevated text-fg" : "text-muted hover:text-fg",
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <CvButton available={cvAvailable} compact className="hidden sm:inline-flex" />
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full text-muted hover:text-fg lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-line/80 lg:hidden">
          <ul className={cn(container, "flex flex-col py-3")}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={href(link.id)}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "block rounded-lg px-3 py-3 text-base transition-colors hover:bg-elevated",
                    isHome && active === link.id ? "text-fg" : "text-muted",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="px-3 pt-3 pb-2 sm:hidden">
              <CvButton available={cvAvailable} className="w-full" />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
