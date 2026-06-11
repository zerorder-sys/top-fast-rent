import type { Metadata } from "next";
import { Libre_Baskerville, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { BRAND } from "@/lib/data";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: `${BRAND.name} | Premium Car Rentals in Kochi`,
  description: BRAND.tagline,
  metadataBase: new URL("https://topfastrentacar.joelreji.space"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: `${BRAND.name} | Premium Car Rentals in Kochi`,
    description: BRAND.tagline,
    siteName: BRAND.name,
    type: "website",
    locale: "en_US",
    url: "https://topfastrentacar.joelreji.space",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} | Premium Car Rentals in Kochi`,
    description: BRAND.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${libreBaskerville.variable} ${montserrat.variable} font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
