"use client";

import {
  Brain,
  HeartHandshake,
  Waves,
  Users,
  BatteryLow,
  Sparkle,
  ArrowUpRight,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import Reveal from "./Reveal";

const services = [
  {
    icon: Brain,
    title: "Kaygı ve Panik Bozukluk",
    desc: "Yoğun endişe, kontrol edilemeyen düşünceler ve panik ataklarla baş etmek için yapılandırılmış çalışma.",
  },
  {
    icon: HeartHandshake,
    title: "İlişki ve Çift Terapisi",
    desc: "İletişim kopuklukları, güven sorunları ve tekrarlayan çatışma döngülerini birlikte ele alma.",
  },
  {
    icon: Waves,
    title: "EMDR ile Travma Çalışması",
    desc: "Geçmiş yaşantıların bugünkü etkilerini azaltmayı hedefleyen, kanıt temelli bir yöntem.",
  },
  {
    icon: Users,
    title: "Ergen ve Genç Yetişkin Danışmanlığı",
    desc: "Kimlik arayışı, aile içi gerilim ve okul/kariyer baskısı yaşayan genç danışanlar için destek.",
  },
  {
    icon: BatteryLow,
    title: "Tükenmişlik ve Depresif Belirtiler",
    desc: "Enerji kaybı, motivasyonsuzluk ve isteksizlik hissiyle baş etmeye yönelik çalışma alanı.",
  },
  {
    icon: Sparkle,
    title: "Özgüven ve Kişisel Gelişim",
    desc: "Kendini tanıma, sınır koyma ve daha dengeli bir öz-değer algısı geliştirme süreci.",
  },
];

export default function Services() {
  return (
    <section id="services" className="max-w-[1400px] mx-auto px-6 md:px-8 py-20">
      <Reveal>
        <p className="text-[13px] tracking-[0.2em] text-accent font-medium mb-3">HİZMETLER</p>
        <h2 className="font-[family-name:var(--font-display)] text-[28px] md:text-[36px] leading-tight font-medium text-ink max-w-xl">
          Hangi konuda destek arıyorsanız, birlikte bir yol haritası çıkarabiliriz.
        </h2>
      </Reveal>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.05} className="bg-paper">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group block h-full p-7 hover:bg-mist transition-colors duration-300"
            >
              <s.icon size={24} strokeWidth={1.4} className="text-accent" />
              <h3 className="mt-5 text-[16.5px] font-semibold text-ink leading-snug">{s.title}</h3>
              <p className="mt-2.5 text-[13.5px] text-ink-soft leading-relaxed">{s.desc}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Bilgi almak için yazın
                <ArrowUpRight size={14} />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
