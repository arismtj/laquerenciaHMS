import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Whatsapp from "../components/whatsapp/Whatsapp";
import "./globals.css";
import { NextAuthProvider } from "../components/AuthProvider/AuthProvider";
import Toast from "../components/Toast/Toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["italic", "normal"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "La Querencia",
  description:
    "Disfruta de un Estancia Única en Nuestro Hotel Frente al Mar en Asia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>

        <NextAuthProvider>
          <Toast/>
          <main className="font-name">
            <Header />
            {children}
            <Whatsapp />
            <Footer />
          </main>
        </NextAuthProvider>
      </body>
    </html>
  );
}
