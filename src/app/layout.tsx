import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { CheckoutProvider } from "@/components/CheckoutModal";
import "./globals.css";

/* ============================================
   Root Layout — Hub Créateur
   Font: Plus Jakarta Sans ExtraBold (headings)
         Inter (body)
   → Style proche Uppbeat.io
   ============================================ */

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Hub Créateur — Lance ta chaîne YouTube. Pour de vrai.",
  description:
    "La méthode et la communauté qui transforment les spectateurs en créateurs YouTube.",
  authors: [{ name: "Hub Créateur" }],
  openGraph: {
    title: "Hub Créateur — Lance ta chaîne YouTube. Pour de vrai.",
    description:
      "La méthode et la communauté qui transforment les spectateurs en créateurs YouTube.",
    url: "https://hubcreateur.com",
    siteName: "Hub Créateur",
    type: "website",
    locale: "fr_FR",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${plusJakarta.variable} antialiased`}>
        <CheckoutProvider>
          {children}
        </CheckoutProvider>
      </body>
    </html>
  );
}
