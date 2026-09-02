import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elif Yıldıray Psikoloji | Akhisar, Manisa Klinik Psikolog",
  description:
    "Uzm. Psk. Elif Yıldıray - Akhisar, Manisa'da bireysel terapi, çift terapisi, EMDR ve online danışmanlık. Randevu için WhatsApp'tan yazın. (Demo site)",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
