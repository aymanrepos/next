"use client"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image";
import "./style.css"
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Skeleton } from "@/components/ui/skeleton";
import { useParams } from "next/navigation";
import axios from "axios";
import { useDispatch } from "react-redux";
import { InsertGuilds } from "@/lib/slice/guildSlice";

export default function Sidebar() {
  const [guilds, setGuilds] = useState<OAuthGuild[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { data: session } = useSession();
  const params = useParams();
  const dispatch = useDispatch();

  const getGuilds = useCallback(async () => {
    if (!session?.accessToken) return;

    try {
      const response = await axios.get("https://discord.com/api/users/@me/guilds", {
        headers: {
          Authorization: `Bearer ${(session as newSession).accessToken}`,
        },
      });

      const data = response.data;
      if (Array.isArray(data)) {
        const filteredGuilds = data.filter(
          (guild: OAuthGuild) => (Number(guild.permissions) & 0x8) === 0x8
        );
        setGuilds(filteredGuilds);
        dispatch(InsertGuilds(filteredGuilds));
      } else {
        console.error("Unexpected response:", data);
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error : any) {
      if (error.response && error.response.status === 429) {
        console.warn("Rate limited. Retry after", error.response.data.retry_after, "seconds");
      } else {
        console.error("Error fetching guilds:", error);
      }
    } finally {
      setIsLoading(false);
    }
  }, [dispatch, session]);

  useEffect(() => {
    if (session?.accessToken) {
      getGuilds();
    }
  }, [session?.accessToken, getGuilds]);
  
  return (
    <div className="flexCol min-w-20 py-10 gap-5 ml-5 bg-gold-500 rounded-full">
       {!session ? <NewSkeletton num={1} /> : 
      <Link href="/dashboard">
        <Image src={session?.user?.image ?? ""} className={`cursor-pointer serverHover transition-all ${params?.serverID === undefined ? "active" : ""}`} alt={session?.user?.name ?? ""} width={70} height={70} />
      </Link>}
      
      <div className="border-b-4 rounded-xl border-gold-300 w-2/3 mx-auto"></div>
      {isLoading ? <NewSkeletton num={5} /> :
        guilds.map((guild) => (
          <Link href={`/server/${guild.id}`} key={guild.id}>
            <Image 
              src={guild.icon ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png` : "/discord.png"} 
              className={`cursor-pointer serverHover transition-all ${(params?.serverID === undefined || params?.serverID !== guild.id ) ? "" : "active"}`} 
              alt={guild.name} width={70} height={70} />
          </Link>
        ))}
    </div>
  );
}

function NewSkeletton({ num }: { num: number }) {
  return (
    <>
      {Array.from({ length: num }).map((_, i) => (
        <Skeleton key={i} className="w-[70px] h-[70px] rounded-full" />
      ))}
    </>
  );
}
