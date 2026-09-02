"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import { siteConfig } from "@/data/site";

interface NavbarProps {
  onNavigate: (target: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobil menü açıkken de okunaklı olması için opak görünüm kullanılır.
  const solid = scrolled || open;

  const links = [
    { label: "Anasayfa", target: "hero" },
    { label: "Hizmetler", target: "services" },
    { label: "Nasıl Çalışıyoruz", target: "approach" },
    { label: "Hakkımda", target: "about" },
    { label: "Sık Sorulanlar", target: "faq" },
    { label: "İletişim", target: "contact" },
  ];

  return (
    <div
      className={`transition-colors duration-300 ${
        solid ? "bg-paper/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(0,0,0,0.08)]" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-8 py-2.5 max-w-[1400px] mx-auto">
        <button onClick={() => onNavigate("hero")} className="text-left leading-[1.05] shrink-0">
          <span
            className={`block text-[16px] font-medium tracking-[0.04em] font-[family-name:var(--font-display)] italic transition-colors duration-300 ${
              solid ? "text-ink" : "text-white"
            }`}
          >
            {siteConfig.brand.line1}
          </span>
          <span
            className={`block text-[11px] font-medium tracking-[0.3em] mt-0.5 transition-colors duration-300 ${
              solid ? "text-accent" : "text-accent-soft"
            }`}
          >
            {siteConfig.brand.line2} · {siteConfig.brand.line3}
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => onNavigate(l.target)}
              className={`text-[14.5px] hover:text-accent transition-colors duration-300 ${
                solid ? "text-ink" : "text-white"
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noreferrer"
            className={`flex items-center gap-2 text-[13px] px-4 py-2.5 transition-colors duration-300 ${
              solid
                ? "bg-accent text-white hover:bg-accent-deep"
                : "bg-white/10 border border-white/40 text-white backdrop-blur-sm hover:bg-white/20"
            }`}
          >
            <MessageCircle size={15} />
            WhatsApp&apos;tan Randevu Al
          </a>
        </div>

        <button
          className={`lg:hidden transition-colors duration-300 ${solid ? "text-ink" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-line bg-paper"
          >
            <div className="px-6 py-4 space-y-1">
              {links.map((l) => (
                <button
                  key={l.label}
                  onClick={() => {
                    onNavigate(l.target);
                    setOpen(false);
                  }}
                  className="block w-full text-left py-2.5 text-[15px] text-ink border-b border-mist last:border-0"
                >
                  {l.label}
                </button>
              ))}
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-3 flex items-center justify-center gap-2 bg-accent text-white text-[14px] px-5 py-3"
              >
                <MessageCircle size={16} />
                WhatsApp&apos;tan Randevu Al
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
