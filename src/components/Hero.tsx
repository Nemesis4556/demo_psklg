"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: EASE },
  },
};

interface HeroProps {
  onNavigate: (target: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="hero" className="relative h-[100dvh] min-h-[560px] w-full overflow-hidden bg-ink">
      <motion.img
        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1800&auto=format&fit=crop"
        alt="Sakin bir danışmanlık odası"
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: EASE }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/55 to-ink/30" />
      <div className="absolute inset-0 bg-ink/20" />

      <div className="relative h-full max-w-[1400px] mx-auto px-6 md:px-8 flex flex-col items-start justify-end pb-24 md:pb-28">
        <motion.div className="max-w-xl" variants={container} initial="hidden" animate="visible">
          <motion.p variants={item} className="text-[13px] tracking-[0.25em] text-accent-soft font-medium mb-5">
            AKHİSAR&apos;DA BİREYSEL VE ÇİFT TERAPİSİ
          </motion.p>
          <motion.h1
            variants={item}
            className="font-[family-name:var(--font-display)] text-[34px] md:text-[52px] leading-[1.15] font-medium text-white"
          >
            Kendinizi anlatabileceğiniz,{" "}
            <span className="italic text-accent-soft">yargılanmadan</span> dinlenebileceğiniz bir alan.
          </motion.h1>
          <motion.p variants={item} className="mt-5 text-[15.5px] md:text-[16.5px] text-white/80 leading-relaxed max-w-lg">
            {siteConfig.fullName}, {siteConfig.title.toLowerCase()} olarak kaygı, ilişki
            zorlukları ve travma sonrası süreçlerde yanınızda; yüz yüze ya da
            online.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 bg-accent hover:bg-accent-deep text-white text-[14.5px] px-6 py-3.5 transition-colors duration-300"
            >
              <MessageCircle size={17} />
              Randevu Al
            </a>
            <button
              onClick={() => onNavigate("services")}
              className="inline-flex items-center gap-2 text-[14.5px] text-white/90 hover:text-white px-2 py-3.5 transition-colors duration-300 border-b border-white/40 hover:border-white"
            >
              Hizmetleri Gör
              <ArrowRight size={16} />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
