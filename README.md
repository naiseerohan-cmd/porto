# Portfolio

Personal portfolio built with Next.js 14 (App Router) and Tailwind CSS. Dark mode with a neon lime accent. Ready to deploy to Vercel.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize your content

**Semua konten personal ada di satu file:** `data/content.js`

Edit file itu untuk ganti:
- Nama, role, lokasi, timezone
- Availability status (`open` / `booked` / `closed`)
- Headline hero
- Bio dan meta info
- Daftar project
- Tech stack
- Email dan social links

Kamu **tidak perlu** menyentuh file lain untuk mengganti konten.

## Deploy to Vercel

**Cara paling gampang (via web):**

1. Push project ini ke GitHub:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```

2. Buka [vercel.com/new](https://vercel.com/new), login pakai GitHub, pilih repo tadi.

3. Vercel auto-detect Next.js. Klik **Deploy**. Selesai — biasanya 1–2 menit.

**Alternatif via CLI:**

```bash
npm i -g vercel
vercel
```

Ikuti prompt-nya. Untuk production deploy: `vercel --prod`.

## Project structure

```
portfolio/
├── app/
│   ├── layout.jsx      # Root layout + font loading
│   ├── page.jsx        # Homepage assembly
│   └── globals.css     # Base styles + custom utilities
├── components/
│   ├── StatusBar.jsx   # Top strip: availability + local time
│   ├── Nav.jsx         # Section nav
│   ├── Hero.jsx        # Cursor-following spotlight hero
│   ├── About.jsx       # Two-column about + meta table
│   ├── Work.jsx        # Project list
│   ├── Stack.jsx       # Grouped toolkit
│   ├── Contact.jsx     # Email CTA + socials
│   └── Footer.jsx
├── data/
│   └── content.js      # ← EDIT THIS FILE
├── tailwind.config.js  # Design tokens (colors, fonts, motion)
└── ...
```

## Design tokens

Colors and type live in `tailwind.config.js`. Ganti palette di sana kalau mau tema lain:

- `ink.*` — background scale (near-black to charcoal)
- `chalk.*` — text scale (white, muted, dim)
- `neon.*` — accent color (default lime `#C6FF3D`)

Fonts di-load dari Google Fonts via `next/font` di `app/layout.jsx`:
Space Grotesk (display), Inter (body), JetBrains Mono (utility).

## Accessibility

- `prefers-reduced-motion` respected (spotlight + animations disabled)
- Focus rings visible on all interactive elements
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`, `<dl>`
- Text contrast passes WCAG AA on dark background

## License

Do whatever you want with it.
