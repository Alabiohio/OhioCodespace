import type { Metadata } from "next";
import "./globals.css";
import "@/styles/App.css";
import AOSInit from "./AOSInit";


export const metadata: Metadata = {
  title: "Ohio Codespace — Web & Local SEO Solutions",
  description:
    "Professional websites and Google Business Profile optimization built to improve search visibility, customer trust, and long-term business growth.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
