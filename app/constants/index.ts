import Icon from "react-icons/hi";
import IconsIo from "react-icons/io5"

import {
  clanManager,
  lawliet_chat,
  logger,
  logger_chat,
  securite,
  selfRole,
  selfRole_chat,
  serinas,
  serinas_chat,
} from "../assets/img";
import { StaticImageData } from "next/image";

export const arrayLinks: { name: string; links: string }[] = [
  { name: "Features", links: "/Features" },
  { name: "Docs", links: "/Docs" },
  { name: "Pricing🌟", links: "/pricing" },
  { name: "About", links: "/about" },
];

export const arrayStats: { icon: keyof typeof Icon; name: string }[] = [
  { icon: "HiWifi", name: "Ultra-low latency" },
  { icon: "HiPlusCircle", name: "Over +200 invites" },
  { icon: "HiShieldCheck", name: "Boost security" },
];

export interface BotProps {
  name: string;
  desc: string;
  imgURL: StaticImageData;
  inviteURL: string;
  docsURL?: string;
}
export const arrayBots: BotProps[] = [
  {
    name: "Serinas",
    desc: `Serinas is a one-tap channel manager bot that lets users instantly create and manage their own voice channels in Discord with a simple click on "Make Your One Tap." Users have full control over their channel with easy-to-use commands, making management effortless.`,
    imgURL: serinas,
    inviteURL: "",
    docsURL: "",
  },
  {
    name: "LoggerBot",
    desc: `LoggerBot provides a complete view of your server's activity, tracking everything from deleted messages, role changes, server joins, bans, kicks, and more. It keeps a detailed log, ensuring you're always informed about what's happening in your Discord server.`,
    imgURL: logger,
    inviteURL: "",
    docsURL: "",
  },
  {
    name: "Securite Bot",
    desc: `SecurityBot safeguards your server from spam, unwanted bans, and malicious actions. It protects against harmful activities, ensuring your server stays secure and well-protected at all times.`,
    imgURL: securite,
    inviteURL: "",
    docsURL: "",
  },
  {
    name: "Self Role",
    desc: `SelfRole lets members easily assign roles to themselves, such as favorite games or relationship status (single or taken), giving them a personalized experience without needing admin help.`,
    imgURL: selfRole,
    inviteURL: "",
    docsURL: "",
  },
  {
    name: "Clan Manager",
    desc: `Clan Manager allows server owners to effortlessly manage clans, assign clan leaders and co-leaders, and organize clan activities, making it easy to keep track of your community's teams.`,
    imgURL: clanManager,
    inviteURL: "",
    docsURL: "",
  },
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

export const arrayFeatures: FeaturesProps[] = [
  {
    imgURL: lawliet_chat,
    header: {
      icon: "IoCheckbox",
      title: "Check User Before Joining",
    },
    title: "Anti-spam Bots",
    desc: "A Discord bot that makes managing your server easy and quick, and check the roles of the user in other server before joining",
    btnText: "Let's Check them!",
    btnURL: "",
  },
  {
    imgURL: logger_chat,
    header: {
      icon: "IoNewspaperOutline",
      title: "Logs of Your Server",
    },
    title: "Stay on touch",
    desc: "LoggerBot tracks every key action in your server, from message deletions to user bans, giving you real-time updates and full control. Stay informed with easy-to-use, detailed logs.",
    btnText: "Set up Your Logger",
    btnURL: "",
  },
 
  {
    imgURL: serinas_chat,
    header: {
      icon: "IoChatbubblesOutline",
      title: "Manage Your One Tap",
    },
    title: "Full-controll",
    desc: " I'm the Ultimate Assistant bot for creating and managing temporary voice channels, equipped with a range of useful and efficient commands to enhance your experience.",
    btnText: "Manage it now!",
    btnURL: "",
  },
 
  {
    imgURL: selfRole_chat,
    header: {
      icon: "IoAdd",
      title: "Let's Members set their roles", 
    },
    title: "Customizable Role System",
    desc: "SelfRole makes it easy to set up server role claiming. Users can add roles like gender, notifications, and pronouns to themselves with just a click.",
    btnText: "manage it now!",
    btnURL: "",
  },
 

];


export const testimonials: { name: string; desc: string; imgURL: StaticImageData }[] = [
  {
    name: "John Doe",
    desc: `I've been using Serinas for a few months now, and it's been a game-changer for my server. The one-tap channel creation feature is incredibly convenient and easy to use. I can't imagine managing my server without it!`,
    imgURL: serinas,
  },
  {
    name: "Jane Doe",
    desc: `LoggerBot has been a lifesaver for me. I love how it keeps track of everything happening in my server, from message deletions to user bans. It's a must-have for any server owner who wants to stay informed and in control.`,
    imgURL: logger,
  },
  {
    name: "John Doe",
    desc: `I've been using Serinas for a few months now, and it's been a game-changer for my server. The one-tap channel creation feature is incredibly convenient and easy to use. I can't imagine managing my server without it!`,
    imgURL: serinas,
  },
  {
    name: "Jane Doe",
    desc: `LoggerBot has been a lifesaver for me. I love how it keeps track of everything happening in my server, from message deletions to user bans. It's a must-have for any server owner who wants to stay informed and in control.`,
    imgURL: logger,
  },
]
