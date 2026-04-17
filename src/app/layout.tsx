import type { Metadata } from "next";
import { Inter, Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import SpotlightCursor from "@/components/SpotlightCursor";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sharetech = Share_Tech_Mono({
  variable: "--font-hacker",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neha Manandhar — UX Designer & Security Specialist",
  description:
    "Portfolio of Neha Manandhar — UX Design, Cybersecurity, and Frontend Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className={`${inter.variable} ${sharetech.variable} antialiased`} suppressHydrationWarning>
      <head>
        {/* Anti-FOUC: apply theme before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'system';var isLight=t==='light'||(t==='system'&&!window.matchMedia('(prefers-color-scheme: dark)').matches);if(isLight)document.documentElement.classList.add('light');}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-bg text-text font-sans">
        <SmoothScroll />
        <SpotlightCursor />
        {children}
      </body>
    </html>
  );
}
