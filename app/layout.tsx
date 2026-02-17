import type { Metadata } from "next";
import "./globals.css";
import { PHProvider } from "./providers";
import NavWrapper from "@/components/NavWrapper";
import { Bebas_Neue, Inter, JetBrains_Mono } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Nomi - Personalization for First-Time Shoppers",
  description: "Increase first-visit conversion and reduce abandoned carts with Nomi's privacy-first personalization layer for ecommerce.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <PHProvider>
          <NavWrapper />
          {children}
        </PHProvider>
      </body>
    </html>
  );
}
