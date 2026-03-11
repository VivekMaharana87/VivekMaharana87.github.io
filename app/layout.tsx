import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vivek Vardhan Maharana | Portfolio",
  description: "Results-driven technology professional specializing in API development, Groovy scripting, and UKG WFM integrations.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-50 antialiased relative min-h-screen`}>
        {children}
      </body>
    </html>
  );
}