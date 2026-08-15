import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { content } from "@/data/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: `${content.name} — ${content.role}`,
  description: content.tagline,
  openGraph: {
    title: `${content.name} — ${content.role}`,
    description: content.tagline,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-ink-950 text-chalk">{children}</body>
    </html>
  );
}
