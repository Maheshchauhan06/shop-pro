import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import Header from "@/Components/Layout/Header";
import Footer from "@/Components/Layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "shop Kero - Shop Everything You Need",
  description:
    "Full-featured e-commerce application built with Next.js, featuring products, cart, checkout, and user authentication.",
  keywords: ["ecommerce", "shopping", "online store", "products"],
  authors: [{ name: "Mahesh Chauhan" }],
};

export const viewport = "width=device-width, initial-scale=1";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
