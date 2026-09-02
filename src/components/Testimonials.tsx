import { Quote } from "lucide-react";
import Reveal from "./Reveal";

const quotes = [
  {
    text: "Uzun süredir ertelediğim bir görüşmeydi. Kendimi hiç yargılanmış hissetmeden anlatabildiğim bir ortam buldum.",
    initials: "A.Y.",
    context: "Bireysel danışmanlık, 8 seans",
  },
  {
    text: "Eşimle birlikte başladığımız süreçte, birbirimizi dinleme biçimimiz gerçekten değişti. Sabırlı ve yönlendirici bir yaklaşımı var.",
    initials: "M.K. & S.K.",
    context: "Çift terapisi, devam ediyor",
  },
  {
    text: "Online seanslar sayesinde iş yoğunluğuma rağmen düzenli devam edebildim. Fark yaratan, seanslar arasındaki tutarlılıktı.",
    initials: "D.T.",
    context: "Online görüşme, 12 seans",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-ink">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-20">
        <Reveal>
          <p className="text-[13px] tracking-[0.2em] text-accent-soft font-medium mb-3">DANIŞAN DENEYİMLERİ</p>
          <h2 className="font-[family-name:var(--font-display)] text-[26px] md:text-[32px] leading-tight font-medium text-white max-w-xl">
            Bu bölümdeki yorumlar örnek/demo amaçlıdır.
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {quotes.map((q, i) => (
            <Reveal key={q.initials} delay={i * 0.1}>
              <div className="h-full flex flex-col border-t border-white/15 pt-6">
                <Quote size={20} strokeWidth={1.5} className="text-rose" />
                <p className="mt-4 text-[14.5px] text-white/85 leading-relaxed italic font-[family-name:var(--font-display)]">
                  &ldquo;{q.text}&rdquo;
                </p>
                <div className="mt-auto pt-4">
                  <p className="text-[13.5px] font-semibold text-white">{q.initials}</p>
                  <p className="text-[12px] text-white/50 mt-0.5">{q.context}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
