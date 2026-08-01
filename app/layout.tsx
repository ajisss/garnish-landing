import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "Garnish — Audit landing page otomatis, dari Claude Code",
  description: "Plugin Claude Code yang mendeteksi masalah desain & konten yang benar-benar menghambat konversi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakarta.variable} h-full`}>
      <body className={`${plusJakarta.variable} font-[var(--font-jakarta)] min-h-full bg-white antialiased`}>{children}</body>
    </html>
  );
}
