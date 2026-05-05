import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import React from "react";
import "./globals.css";

const clashDisplay = localFont({
  src: [
    {
      path: "../fonts/ClashDisplay-Extralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/ClashDisplay-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/ClashDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ClashDisplay-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/ClashDisplay-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/ClashDisplay-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-clash",
});

export const metadata: Metadata = {
  title: "Shree Motors Pvt. Ltd.",
  description:
    "High-performance outdoor gear engineered for the modern explorer. Lightweight, durable, adventure-ready.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${clashDisplay.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased font-sans overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
