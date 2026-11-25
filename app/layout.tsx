import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "NST Campus Hub",
  description: "A demo campus directory for practicing open source at Newton School of Technology.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-10 focus:rounded-md focus:bg-card focus:p-2">Skip to content</a>
        <SiteHeader />
        <main id="main-content" tabIndex={-1} className="mx-auto w-full max-w-6xl flex-1 px-5 py-9 outline-none sm:px-8 sm:py-12">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
