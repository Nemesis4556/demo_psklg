import { siteConfig } from "@/data/site";
import Reveal from "./Reveal";

const steps = [
  {
    no: "01",
    title: "WhatsApp'tan Yazın",
    desc: "Kısaca kendinizi ve görüşmek istediğiniz konuyu belirtin; size uygun ilk randevu için birlikte bir gün belirleyelim.",
  },
  {
    no: "02",
    title: "Ön Görüşme",
    desc: "İlk seansta birbirimizi tanır, sizi bu görüşmeye getiren süreci ve beklentilerinizi konuşuruz.",
  },
  {
    no: "03",
    title: "Seans Planı",
    desc: "Konuştuklarımız doğrultusunda sıklığı ve yaklaşımı size özel olarak belirlediğimiz bir çalışma planı oluşturulur.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="bg-mist">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-20">
        <Reveal>
          <p className="text-[13px] tracking-[0.2em] text-accent font-medium mb-3">NASIL ÇALIŞIYORUZ</p>
          <h2 className="font-[family-name:var(--font-display)] text-[28px] md:text-[36px] leading-tight font-medium text-ink max-w-xl">
            İlk adımı atmak çoğu zaman en zor kısımdır.
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-10 md:gap-8">
          {steps.map((s, i) => (
            <Reveal key={s.no} delay={i * 0.1}>
              <div className="relative pl-1">
                <span className="font-[family-name:var(--font-display)] italic text-[15px] text-accent">
                  {s.no}
                </span>
                <h3 className="mt-3 text-[18px] font-semibold text-ink">{s.title}</h3>
                <p className="mt-2.5 text-[14px] text-ink-soft leading-relaxed max-w-sm">{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-2.5 left-[calc(100%+2rem-1px)] w-8 h-px bg-line" />
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-12">
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 bg-ink hover:bg-accent-deep text-white text-[14px] px-6 py-3.5 transition-colors duration-300"
          >
            İlk Adımı Atın, Yazın
          </a>
        </Reveal>
      </div>
    </section>
  );
}
