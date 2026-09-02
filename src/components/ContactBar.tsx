import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import Reveal from "./Reveal";

export default function ContactBar() {
  return (
    <section id="contact" className="bg-ink text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <Reveal delay={0}>
          <p className="text-[13px] tracking-[0.15em] text-accent-soft font-medium mb-2.5">ADRESİMİZ</p>
          <p className="text-[14px] text-white/85 leading-relaxed">
            {siteConfig.addressShort}
            <br />
            {siteConfig.addressPostal}
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="text-[13px] tracking-[0.15em] text-accent-soft font-medium mb-2.5">ÇALIŞMA SAATLERİ</p>
          <p className="text-[14px] text-white/85 leading-relaxed">
            {siteConfig.hoursLine1}
            <br />
            {siteConfig.hoursLine2}
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="text-[13px] tracking-[0.15em] text-accent-soft font-medium mb-2.5">TELEFON</p>
          <a
            href={siteConfig.phoneHref}
            className="text-[14px] text-white/85 leading-relaxed hover:text-accent-soft transition-colors"
          >
            {siteConfig.phone}
          </a>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="text-[13px] tracking-[0.15em] text-accent-soft font-medium mb-2.5">WHATSAPP</p>
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-white text-[13.5px] px-5 py-2.5 hover:bg-accent-deep transition-colors duration-300"
          >
            <MessageCircle size={15} />
            WhatsApp&apos;tan Yaz
          </a>
        </Reveal>
      </div>
    </section>
  );
}
