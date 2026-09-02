"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function StickyWhatsApp() {
  return (
    <motion.a
      href={siteConfig.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp'tan Randevu Al"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
      className="lg:hidden fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-accent text-white shadow-[0_10px_30px_-8px_rgba(33,29,40,0.5)] flex items-center justify-center active:scale-95 transition-transform"
    >
      <MessageCircle size={24} strokeWidth={1.8} />
    </motion.a>
  );
}
