"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "İlk seansta ne oluyor?",
    a: "İlk görüşme büyük ölçüde tanışma amaçlıdır. Sizi bu sürece getiren konuyu, beklentilerinizi ve varsa daha önceki terapi deneyimlerinizi konuşuruz. Bu görüşme sonunda birlikte bir yol haritası belirleriz.",
  },
  {
    q: "Seanslar ne kadar sürüyor ve ne sıklıkla yapılıyor?",
    a: "Bireysel seanslar 50 dakika, çift terapisi seansları 75 dakika sürer. Sıklık kişiye göre değişir; çoğu danışan haftada bir görüşmeyle başlar.",
  },
  {
    q: "Online terapi yüz yüze kadar etkili mi?",
    a: "Araştırmalar, görüntülü terapinin birçok konuda yüz yüze terapiyle benzer etkinlikte olduğunu gösteriyor. Tercih tamamen sizin konforunuza ve ihtiyacınıza bağlı; ikisi arasında geçiş de yapılabilir.",
  },
  {
    q: "Gizlilik nasıl sağlanıyor?",
    a: "Görüşmelerde konuşulanlar, yasal olarak zorunlu istisnalar dışında (örneğin kendinize veya başkasına yönelik ciddi bir tehlike durumu) hiçbir şekilde üçüncü kişilerle paylaşılmaz.",
  },
  {
    q: "Randevu nasıl alabilirim?",
    a: "Sayfadaki 'Randevu Al' butonlarından herhangi biri sizi doğrudan WhatsApp'a yönlendirir. Kısa bir mesajla ulaşmanız yeterli; birlikte size uygun bir gün belirleriz.",
  },
  {
    q: "Ücretlendirme hakkında bilgi alabilir miyim?",
    a: "Seans ücretleri görüşme türüne göre değişiklik gösterebilir. Güncel ücret bilgisi için WhatsApp üzerinden iletişime geçmeniz yeterli.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="max-w-[1400px] mx-auto px-6 md:px-8 py-20">
      <Reveal>
        <p className="text-[13px] tracking-[0.2em] text-accent font-medium mb-3">SIK SORULAN SORULAR</p>
        <h2 className="font-[family-name:var(--font-display)] text-[28px] md:text-[36px] leading-tight font-medium text-ink max-w-xl">
          Aklınıza takılan bir şey varsa, muhtemelen daha önce sorulmuştur.
        </h2>
      </Reveal>

      <div className="mt-12 max-w-3xl">
        {faqs.map((f, i) => {
          const isOpen = openIndex === i;
          return (
            <Reveal key={f.q} delay={i * 0.04} className="border-b border-line">
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-[15.5px] md:text-[16.5px] font-medium text-ink">{f.q}</span>
                <Plus
                  size={18}
                  className={`shrink-0 text-accent transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-[14.5px] text-ink-soft leading-relaxed max-w-2xl">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
