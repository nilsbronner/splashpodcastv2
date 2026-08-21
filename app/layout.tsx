import type { Metadata } from "next";
import { Anton, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import MiniFooter from "@/components/ui/MiniFooter";

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://splash-lemedia.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SPLASH — Ça change la vie et le game !",
    template: "%s — SPLASH",
  },
  description:
    "SPLASH est un podcast qui cherche à comprendre ce qui se joue derrière les préjugés, les stéréotypes et les idées reçues dans le jeu vidéo et l'esport. L'onde de soin dans le jeu vidéo.",
  keywords: [
    "SPLASH",
    "podcast jeu vidéo",
    "santé mentale gaming",
    "inclusion jeu vidéo",
    "esport",
    "Skillcamp",
    "BEMOTION",
    "RESET",
  ],
  openGraph: {
    title: "SPLASH — Ça change la vie et le game !",
    description:
      "L'onde de soin dans le jeu vidéo. À Splash, on ne cherche pas l'opinion, mais la compréhension.",
    url: siteUrl,
    siteName: "SPLASH",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SPLASH — Ça change la vie et le game !",
    description:
      "L'onde de soin dans le jeu vidéo. À Splash, on ne cherche pas l'opinion, mais la compréhension.",
  },
  icons: {
    icon: "/brand/icon-orange.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${anton.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased bg-cream text-ink">
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <MiniFooter />
        <Footer />
      </body>
    </html>
  );
}
