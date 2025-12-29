import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Ashish Kharde | AI Engineer",
  description: "Portfolio of Ashish Kharde, a Senior AI Engineer specializing in LLMs, Agents, and Scalable Systems.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} antialiased selection:bg-blue-500/30 font-sans`}>
        {children}
      </body>
    </html>
  );
}
