import { MapPin, Clock, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { InstagramIcon, LinkedinIcon } from "./SocialIcons";

export default function TopBar() {
  return (
    <div className="hidden md:flex items-center justify-between px-8 py-1.5 bg-ink text-[#EDEAF0] text-[12px] tracking-wide">
      <div className="flex items-center gap-2">
        <MapPin size={13} className="text-accent-soft" />
        <span>{siteConfig.address}</span>
      </div>
      <div className="flex items-center gap-2">
        <Clock size={13} className="text-accent-soft" />
        <span>{siteConfig.hours}</span>
      </div>
      <div className="flex items-center gap-4">
        <a href={siteConfig.phoneHref} className="flex items-center gap-2 hover:text-accent-soft transition-colors">
          <Phone size={13} className="text-accent-soft" />
          <span>{siteConfig.phone}</span>
        </a>
        <div className="flex items-center gap-3 pl-3 border-l border-white/15">
          <a href={siteConfig.instagram} aria-label="Instagram" className="hover:text-accent-soft transition-colors">
            <InstagramIcon size={14} />
          </a>
          <a href={siteConfig.linkedin} aria-label="LinkedIn" className="hover:text-accent-soft transition-colors">
            <LinkedinIcon size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
