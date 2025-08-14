import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sword Martial Arts - Training & Fitness",
  description: "Professional martial arts training center offering classes for all levels. Join us to learn self-defense, improve fitness, and build confidence.",
  keywords: ["martial arts", "self-defense", "fitness", "training", "karate", "taekwondo", "kung fu"],
  authors: [{ name: "Sword Martial Arts" }],
  openGraph: {
    title: "Sword Martial Arts",
    description: "Professional martial arts training center",
    url: "https://swordmartialarts.com",
    siteName: "Sword Martial Arts",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sword Martial Arts",
    description: "Professional martial arts training center",
  },
  other: {
    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' ws: wss:; frame-ancestors 'none';",
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
