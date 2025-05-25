import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Panji Nugroho - Portfolio",
  description: "Backend Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-gray-900 overflow-x-hidden`}>
        <Providers>
          <div className="min-h-screen flex flex-col overflow-x-hidden">
            {children}
            <ScrollToTop />
          </div>
        </Providers>
      </body>
    </html>
  );
}
