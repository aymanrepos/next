import { BoleaMetaData } from "@/app/constants/metadata";
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Ecliptic.dev - Server",
    ...BoleaMetaData
  }

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return children
  }