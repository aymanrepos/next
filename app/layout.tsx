import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AuthProvider from "@/context/AuthProvider";
import ProviderRedux from "@/context/Provider";
import { BoleaMetaData } from "./constants/metadata";



const Poppins = localFont({
  src: "./assets/fonts/Poppins/Poppins-Regular.ttf",
  variable: "--font-primary",
  weight: "100 900",
});
const Montserrat = localFont({
  src: "./assets/fonts/Montserrat/Montserrat-VariableFont_wght.ttf",
  variable: "--font-secondary",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Ecliptic.dev - Discord Bot Management Dashboard",
  ...BoleaMetaData,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <ProviderRedux >
        <html lang="en">
          <body
            className={`${Montserrat.variable} ${Poppins.variable} text-white font-primary bg-dark-200 antialiased`}
          >
            {children}
          </body>
        </html>
      </ProviderRedux >
    </AuthProvider>
  );
}








