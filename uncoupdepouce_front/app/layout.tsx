import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "./fonts/Fonts";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

export const metadata: Metadata = {
  title: "Un coup de pouce",
  description: "Nous vous aidons dans tous vos projets de traveau à domicile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-screen">
      <body className={`${roboto.className} antialiased flex flex-col h-full`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
