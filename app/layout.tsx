import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Header } from "./ui";
import { Footer } from "./components";

const roboto = localFont({
 src: [
  {path:"../public/fonts/roboto-regular.ttf",weight:"400",style:"normal"},
  {path:"../public/fonts/roboto-medium.ttf",weight:"500",style:"normal"},
  {path:"../public/fonts/roboto-bold.ttf",weight:"700",style:"normal"},
 ],
 display:"swap",
 variable:"--font-roboto",
});

export const metadata: Metadata = {
  title: "SIRAJ-AI — Technologie, Intelligence & Impact",
  description: "SIRAJ-AI transforme vos idées en solutions digitales : développement web et applications, intelligence artificielle et conseil en stratégie IT.",
  applicationName: "SIRAJ-AI",
  openGraph: {title: "SIRAJ-AI — Vos ambitions. Notre technologie.", description: "Développement digital, intelligence artificielle et conseil IT. Construisons ensemble des solutions qui font la différence.", locale: "fr_FR", type: "website"},
  robots: {index: true, follow: true},
};

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return <html lang="fr" className={roboto.variable}><body><a className="skip-link" href="#contenu">Aller au contenu</a><Header/>{children}<Footer/></body></html>;
}
