import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import SiteBackdrop from "@/components/SiteBackdrop";
import SectionNavRail from "@/components/SectionNavRail";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["500", "700", "800"],
});

export const metadata: Metadata = {
  title: "SaaSNova | The Operator-Led Cloud GTM Execution Engine",
  description:
    "Accelerate cloud marketplace revenue across AWS, Azure, and GCP. Co-sell submissions, field enablement, deal validation, and board-ready pipeline delivered.",
  icons: {
    icon: "/logo-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}>
      <body
        className="relative flex min-h-screen flex-col antialiased font-[family-name:var(--font-inter)]"
        style={{ backgroundColor: "transparent", color: "#0a0e27" }}
      >
        <SiteBackdrop />
        <Navbar />
        <SectionNavRail />
        <main className="relative z-0 flex-1">{children}</main>
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  );
}
