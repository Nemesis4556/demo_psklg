# Elif Yıldıray Psikoloji — Demo Site

Bir klinik psikolog için tek sayfalık (single-page) demo tanıtım sitesi.
İçerikler tamamen kurgusaldır; gerçek bir kişiyi temsil etmez.

## Teknik Yığın

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (`@theme inline` ile CSS değişken tabanlı tema)
- framer-motion (sayfa/scroll animasyonları)
- lucide-react (ikonlar)
- Fontsource: `Newsreader` (display/serif) + `Karla` (body/sans)

## Tasarım Yönü

Referans mobilya projesindeki sıcak krem + altın paletinden bilinçli olarak
uzaklaşıldı. Bunun yerine "Sessiz Güven" adını verdiğimiz bir palet
kullanıldı: mor-antrasit ("erik") nötr ailesi, serin/lavanta tonlu bir zemin
ve tek katman düz bir "dusty indigo" vurgu rengi. Detaylı gerekçe için
`src/app/globals.css` içindeki yorumlara bakınız.

## Yeniden Kullanım

Farklı bir psikolog/danışman için siteyi uyarlamak için tek yapmanız gereken
`src/data/site.ts` dosyasını güncellemektir (isim, adres, telefon, WhatsApp
linki, sosyal medya, harita linki). Diğer tüm bileşenler bu dosyadan veri
çeker.

## Randevu Mekanizması

Sitedeki tüm "Randevu Al" / "İletişime Geç" butonları `siteConfig.whatsapp`
linkine yönlendirir. Başka bir randevu sistemi (takvim, form vb.) bilinçli
olarak eklenmemiştir.

## Geliştirme

```bash
npm install
npm run dev
```

Prodüksiyon derlemesi:

```bash
npm run build
npm start
```
