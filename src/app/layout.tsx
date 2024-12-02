import "./globals.css";

import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

import { cn } from "@/lib/utils";

const fontSans = Roboto_Mono({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontHeading = Roboto_Mono({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          fontHeading.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
