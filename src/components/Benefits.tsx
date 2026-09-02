import { Lock, GraduationCap, CalendarClock, Video } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  {
    icon: Lock,
    title: "Gizlilik ve Güvenli Alan",
    desc: "Görüşmeleriniz tamamen mahrem tutulur; hiçbir bilgi izniniz olmadan paylaşılmaz.",
  },
  {
    icon: GraduationCap,
    title: "Alanında Uzmanlık",
    desc: "EMDR ve bilişsel davranışçı terapi sertifikalarına sahip, güncel yaklaşımlarla çalışan bir uzman.",
  },
  {
    icon: CalendarClock,
    title: "Esnek Randevu Saatleri",
    desc: "Hafta içi akşam saatleri ve Cumartesi seçenekleriyle programınıza uygun görüşme planı.",
  },
  {
    icon: Video,
    title: "Online Görüşme Seçeneği",
    desc: "İster ofiste yüz yüze, ister evinizin konforunda görüntülü görüşme ile devam edin.",
  },
];

export default function Benefits() {
  return (
    <section className="border-y border-line">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-y-9 gap-x-6">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.08}>
            <div className="flex items-start gap-3.5">
              <it.icon size={22} strokeWidth={1.5} className="text-accent mt-0.5 shrink-0" />
              <div>
                <p className="text-[14.5px] font-semibold text-ink">{it.title}</p>
                <p className="text-[13.5px] text-ink-soft mt-1.5 leading-snug">{it.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
