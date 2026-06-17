"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Menu",        href: "#menu"    },
  { label: "Tentang Kami", href: "#why-us"  },
  { label: "Galeri",      href: "#gallery" },
  { label: "Kontak",      href: "#footer"  },
];

function BreadIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 9C3 7 5 5 12 5C19 5 21 7 21 9" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <rect x="3" y="9" width="18" height="10" rx="3" fill="white" fillOpacity="0.2" />
      <rect x="3" y="9" width="18" height="10" rx="3" stroke="white" strokeWidth="2" />
      <line x1="9"  y1="9" x2="9"  y2="19" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
      <line x1="15" y1="9" x2="15" y2="19" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
    </svg>
  );
}

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted,    setMounted]    = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active,     setActive]     = useState("Menu");

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[rgba(255,244,247,0.88)] backdrop-blur-md border-b border-[#FFD6E0] shadow-[0_2px_16px_rgba(232,84,122,0.08)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px] md:h-[88px]">

          {/* ── Logo ── */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div
              className="w-10 h-10 rounded-[14px] flex items-center justify-center flex-shrink-0
                         shadow-[0_4px_12px_rgba(232,84,122,0.30)]
                         group-hover:scale-105 transition-transform"
              style={{ background: "linear-gradient(135deg,#E8547A,#C03060)" }}
            >
              <BreadIcon />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="text-[18px] font-black tracking-tight text-[#1A0E14]"
                style={{ fontFamily: "'Zen Maru Gothic',system-ui,sans-serif" }}
              >
                Iseya<span className="text-[#E8547A]">.</span>
              </span>
              <span
                className="text-[9.5px] font-bold tracking-[.18em] text-[#FFB7C5] mt-0.5"
                style={{ fontFamily: "'Noto Serif JP',serif" }}
              >
                イセヤベーカリー
              </span>
            </div>
          </a>

          {/* ── Desktop links ── */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActive(link.label)}
                className={cn(
                  "relative px-4 py-2 rounded-[10px] text-[13px] font-bold transition-all",
                  active === link.label
                    ? "text-[#E8547A]"
                    : "text-[#7A5060] hover:text-[#E8547A] hover:bg-[#FFF0F4]"
                )}
              >
                {link.label}
                {active === link.label && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2.5px] rounded-full bg-[#E8547A]"
                  />
                )}
              </a>
            ))}
          </div>

          {/* ── Right actions ── */}
          <div className="hidden md:flex items-center gap-2">
            {/* Buka sekarang pill */}
            <span className="inline-flex items-center gap-1.5 bg-[#FFF0F4] border-[1.5px] border-[#FFB7C5] rounded-full py-1 px-3 text-[9.5px] font-bold text-[#C03060]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8547A] animate-pulse" />
              Buka Sekarang
            </span>

            {/* Theme toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-[36px] h-[36px] rounded-[10px] border-[1.5px] border-[#FFD6E0] bg-white
                         flex items-center justify-center text-[#A07080]
                         hover:border-[#E8547A] hover:text-[#E8547A] hover:bg-[#FFF0F4]
                         transition-all"
              aria-label="Ganti tema"
            >
              {mounted && theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* CTA */}
            <button
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-[12px] text-white text-[13px] font-bold
                         shadow-[0_4px_14px_rgba(232,84,122,0.28)]
                         hover:-translate-y-0.5 hover:shadow-[0_7px_20px_rgba(232,84,122,0.38)]
                         active:scale-95 transition-all"
              style={{ background: "linear-gradient(135deg,#E8547A,#C03060)" }}
            >
              <ShoppingBag size={13} />
              Pesan
            </button>
          </div>

          {/* ── Mobile controls ── */}
          <div className="flex md:hidden items-center gap-1.5">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-8 h-8 rounded-[10px] border-[1.5px] border-[#FFD6E0] bg-white
                         flex items-center justify-center text-[#A07080]
                         hover:border-[#E8547A] hover:text-[#E8547A] transition-all"
              aria-label="Ganti tema"
            >
              {mounted && theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-8 h-8 rounded-[10px] border-[1.5px] border-[#FFD6E0] bg-white
                         flex items-center justify-center text-[#7A5060]
                         hover:border-[#E8547A] hover:text-[#E8547A] transition-all"
              aria-label="Buka menu"
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>

        </div>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[rgba(255,244,247,0.97)] backdrop-blur-md border-b border-[#FFD6E0] px-4 pb-4"
          >
            <div className="flex flex-col gap-1 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => { setActive(link.label); setMobileOpen(false); }}
                  className={cn(
                    "py-3 px-3 text-[13px] font-bold rounded-xl transition-colors",
                    "border-b border-[#FFE8EE] last:border-0",
                    active === link.label
                      ? "text-[#E8547A] bg-[#FFF0F4]"
                      : "text-[#7A5060] hover:text-[#E8547A] hover:bg-[#FFF0F4]"
                  )}
                >
                  {link.label}
                </a>
              ))}

              {/* Pill status mobile */}
              <div className="flex items-center gap-2 px-3 py-2 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8547A] animate-pulse" />
                <span className="text-[10px] font-bold text-[#C03060]">Buka Sekarang</span>
              </div>

              <button
                className="mt-1 w-full flex items-center justify-center gap-2
                           py-3 rounded-[14px] text-white text-[13px] font-bold
                           shadow-[0_4px_14px_rgba(232,84,122,0.28)]"
                style={{ background: "linear-gradient(135deg,#E8547A,#C03060)" }}
              >
                <ShoppingBag size={15} />
                Pesan Sekarang
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}