import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { NextProvider } from "fumadocs-core/framework/next";
import { TreeContextProvider } from "fumadocs-ui/contexts/tree";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { source } from "@/lib/source";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hyv.xentriom.com"),
  title: {
    default: "HoYoVista",
    template: "%s - HoYoVista",
  },
  description: "HoYoVista Documentation and Guides",
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className={`font-sans flex flex-col min-h-screen antialiased`}>
        <NextProvider>
          <TreeContextProvider tree={source.getPageTree()}>
            <RootProvider>
              {children}
              <Analytics />
            </RootProvider>
          </TreeContextProvider>
        </NextProvider>
      </body>
    </html>
  );
}
