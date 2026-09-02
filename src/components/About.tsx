import { BadgeCheck, BookOpen, Waves, Users2 } from "lucide-react";
import Reveal from "./Reveal";

const trust = [
  { icon: BadgeCheck, text: "Sertifikalı EMDR Terapisti" },
  { icon: BookOpen, text: "Bilişsel Davranışçı Terapi Eğitimi" },
  { icon: Waves, text: "Gizlilik İlkesine Tam Bağlılık" },
  { icon: Users2, text: "Yüz Yüze ve Online Görüşme" },
];

export default function About() {
  return (
    <section id="about" className="max-w-[1400px] mx-auto px-6 md:px-8 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <Reveal y={30}>
          <div className="aspect-[4/5] md:aspect-[4/5] max-w-md mx-auto overflow-hidden bg-mist">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop"
              alt="Danışmanlık odasından bir kare"
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div>
            <p className="text-[12.5px] tracking-[0.2em] text-accent font-medium mb-3">HAKKIMDA</p>
            <h2 className="font-[family-name:var(--font-display)] text-[28px] md:text-[34px] leading-tight font-medium text-ink mb-5">
              Elif Yıldıray
            </h2>
            <p className="text-[15px] text-ink-soft leading-relaxed mb-4 max-w-md">
              Ege Üniversitesi Psikoloji Bölümü&apos;nden mezun oldum, klinik
              psikoloji alanında yüksek lisansımı tamamladım. On yılı aşkın
              süredir bireysel danışmanlık ve çift terapisi alanında
              çalışıyorum; EMDR ve bilişsel davranışçı terapi sertifikalarına
              sahibim.
            </p>
            <p className="text-[15px] text-ink-soft leading-relaxed mb-8 max-w-md">
              Terapiyi, danışanın kendi hızında ilerlediği; yargılamadan
              dinlenildiği ortak bir çalışma alanı olarak görüyorum. Her
              görüşme, o kişinin ihtiyaçlarına göre şekillenir.
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-5">
              {trust.map((t) => (
                <div key={t.text} className="flex items-start gap-2.5">
                  <t.icon size={19} strokeWidth={1.5} className="text-accent mt-0.5 shrink-0" />
                  <span className="text-[13.5px] text-ink leading-snug">{t.text}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
