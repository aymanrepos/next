import { Metadata } from "next";

export const BoleaMetaData: Metadata = {
  description: `Ecliptic.dev is a powerful and intuitive dashboard for managing Discord bots. Easily configure bot settings, monitor real-time logs, 
      analyze performance, and control server moderation with a user-friendly interface. Ideal for bot developers and server admins to streamline 
      operations and enhance community engagement.`,
  keywords: [
    "Ecliptic",
    "Discord Bot",
    "Bot Management",
    "Discord Dashboard",
    "Bot Analytics",
    "Server Management",
    "Real-time Logs",
    "Automated Moderation",
  ],
  metadataBase: new URL(process.env.DEFAULT_DOMAIN as string),
  openGraph: {
    title: "Ecliptic.dev - Discord Bot Management Dashboard",
    description: `Manage your Discord bots efficiently with Ecliptic.dev. Track logs, configure commands, and oversee bot performance all in one place.`,
    url: process.env.DEFAULT_DOMAIN,
    type: "website",
    images: [
      {
        url: process.env.DEFAULT_DOMAIN + "logo.svg",
        width: 800,
        height: 600,
        alt: "Ecliptic Dashboard Logo",
      },
    ],
  },
};

