"use client"
import { RootState } from "@/lib/store"
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux"
import { useSession } from "next-auth/react";
import { BarsChange } from "@/lib/slice/dashboardinfobarslice";

export default function Infobar() {

    const params = usePathname();
    const guilds = useSelector((state: RootState) => state.guilds.guildsHasAdmin);
    const openBar = useSelector((state: RootState) => state.bars.value);
    const dispatch = useDispatch();

    return (
        <div onClick={() => dispatch(BarsChange(false))} className={(openBar ? "" : "max-md:hidden  max-md:inset-0") + " rounded-xl w-full bg-gold-500 p-4"}>

            <div className="text-lg font-bold text-white">
                {
                    params?.split("/")[1] == "server" && guilds.length > 0 ?
                        <ServerComponent guildinfo={guilds.filter(e => e.id === params?.split("/")[2])[0]} /> :
                        <DashboardComponent />

                }
            </div>
        </div>
    )
}


function ServerComponent({ guildinfo }: { guildinfo: OAuthGuild }) {
    console.log(guildinfo)
    return (
        <div className="flexCol">
            <Image
                src={guildinfo.icon ? `https://cdn.discordapp.com/icons/${guildinfo.id}/${guildinfo.icon}.png` : "/discord.png"}
                width={100}
                alt="server icon"
                height={100}
                className="rounded-full"
            />

            <h2 className="font-bold font-secondary my-3 text-xl">{guildinfo.name}</h2>


        </div>
    )
}

function DashboardComponent() {
    const { data } = useSession();

    return (
        <div className="flexCol">
            <Image
                src={data?.user?.image ?? ""}
                width={100}
                alt="server icon"
                height={100}
                className="rounded-full"
            />

            <h2 className="font-bold font-secondary my-3 text-xl">{data?.user?.name}</h2>
        </div>
    )
}