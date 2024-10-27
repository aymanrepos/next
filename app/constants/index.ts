import Icon from "react-icons/hi";
import IconsIo from "react-icons/io5"


import { StaticImageData } from "next/image";

export const arrayLinks: { name: string; links: string }[] = [
  { name: "Features", links: "/Features" },
  { name: "Docs", links: "/Docs" },
  { name: "Pricing🌟", links: "/pricing" },
  { name: "About", links: "/about" },
];

export const arrayStats: { icon: keyof typeof Icon; name: string }[] = [];

export interface BotProps {
  name: string;
  desc: string;
  imgURL: StaticImageData;
  inviteURL: string;
  docsURL?: string;
}
export const arrayBots: BotProps[] = [
  
];


export interface FeaturesProps {
  imgURL: StaticImageData;
  header: {
    icon: keyof typeof IconsIo;
    title: string;
  };

  title: string;
  desc: string;

  btnText: string;
  btnURL: string;
}

export const arrayFeatures: FeaturesProps[] = [];


export const testimonials: { name: string; desc: string; imgURL: StaticImageData }[] = [];
