import { siteConfig } from "@/data/site";
import { InstagramIcon, LinkedinIcon } from "./SocialIcons";

interface FooterProps {
  onNavigate: (target: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <span className="block text-[18px] font-medium italic font-[family-name:var(--font-display)] text-ink">
            {siteConfig.brand.line1}
          </span>
          <span className="block text-[11px] font-medium tracking-[0.3em] text-accent mt-1">
            {siteConfig.brand.line2} · {siteConfig.brand.line3}
          </span>
          <p className="text-[13px] text-ink-faint mt-3 max-w-[220px] leading-relaxed">
            {siteConfig.title}
          </p>
        </div>
        <div>
          <p className="text-[13.5px] font-semibold text-ink mb-3">Kurumsal</p>
          <div className="flex flex-col gap-2">
            <button onClick={() => onNavigate("about")} className="text-left text-[13.5px] text-ink-soft hover:text-accent transition-colors">
              Hakkımda
            </button>
            <button onClick={() => onNavigate("approach")} className="text-left text-[13.5px] text-ink-soft hover:text-accent transition-colors">
              Nasıl Çalışıyoruz
            </button>
            <button onClick={() => onNavigate("faq")} className="text-left text-[13.5px] text-ink-soft hover:text-accent transition-colors">
              Sık Sorulan Sorular
            </button>
            <button onClick={() => onNavigate("contact")} className="text-left text-[13.5px] text-ink-soft hover:text-accent transition-colors">
              İletişim
            </button>
          </div>
        </div>
        <div>
          <p className="text-[13.5px] font-semibold text-ink mb-3">Hizmetler</p>
          <div className="flex flex-col gap-2">
            <button onClick={() => onNavigate("services")} className="text-left text-[13.5px] text-ink-soft hover:text-accent transition-colors">
              Kaygı ve Panik Bozukluk
            </button>
            <button onClick={() => onNavigate("services")} className="text-left text-[13.5px] text-ink-soft hover:text-accent transition-colors">
              Çift Terapisi
            </button>
            <button onClick={() => onNavigate("services")} className="text-left text-[13.5px] text-ink-soft hover:text-accent transition-colors">
              EMDR
            </button>
            <button onClick={() => onNavigate("services")} className="text-left text-[13.5px] text-ink-soft hover:text-accent transition-colors">
              Tüm Hizmetler
            </button>
          </div>
        </div>
        <div>
          <p className="text-[13.5px] font-semibold text-ink mb-3">Bizi Takip Edin</p>
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.instagram}
              aria-label="Instagram"
              className="w-9 h-9 flex items-center justify-center border border-line text-ink hover:border-accent hover:text-accent transition-colors"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href={siteConfig.linkedin}
              aria-label="LinkedIn"
              className="w-9 h-9 flex items-center justify-center border border-line text-ink hover:border-accent hover:text-accent transition-colors"
            >
              <LinkedinIcon size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-line px-6 md:px-8 py-5 max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-[12.5px] text-ink-faint">
          © 2026 {siteConfig.brand.line1} {siteConfig.brand.line2}. Tüm hakları saklıdır.
        </p>
        <p className="text-[12px] text-ink-faint">
          Bu site bir <span className="text-ink-soft">demo</span> çalışmasıdır; içerikler örnek amaçlıdır.
        </p>
      </div>
    </footer>
  );
}
