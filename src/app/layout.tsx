import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import AosInitializer from "./components/AosInitializer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-Inter",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "PixelUp",
  description: "Feita com Next.js e Tailwind CSS",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <AosInitializer />
        {children}
      </body>
    </html>
  );
}
