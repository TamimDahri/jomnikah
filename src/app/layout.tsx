import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "JomNikah — Nikah Thailand, Daftar Sah di Malaysia",
  description:
    "Pakej nikah lengkap di Songkhla, Thailand dengan pendaftaran sah di Malaysia. RM6,500 all-in. Sijil dalam masa sebulan. Jaminan wang dikembalikan.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ms" className={geist.variable}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
