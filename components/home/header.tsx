"use client"

import {signIn , useSession} from "next-auth/react"
import Link from "next/link";
import { useState } from "react";
import Logo from "../shared/logo";
import { Button } from "../ui/button";
import { FaBars } from "react-icons/fa";
import { arrayLinks } from "@/app/constants";
import { cn } from "@/lib/utils";
import useScrollPosition from "../../hooks/useScrollPosition";
import Avatar from "../shared/avatar";
import "@/app/css/loader.css"
import useWindowSize from "@/hooks/useWindowSize";
import { FaX } from "react-icons/fa6";
import MediaLink from "../shared/media";
export default function Header() {
    
    const [showBar , setShowBar] = useState<boolean>(false);
    const {data : session} = useSession();


    // get scroll position
    const {y} = useScrollPosition();
    const {width} = useWindowSize();
    console.log(showBar)
    return (
        <header className={cn("headerFixed" , {"bg-dark-300 border-b border-dark-500" : y ?? 0  > 15})}>
            <div className="container py-5 flexBetween">

                <FaBars size={30} onClick={() => setShowBar(pre => !pre)} className="text-gold-300 cursor-pointer md:hidden" />
                <Logo size={30} />
                <ul className="md:flexStart gap-5 hidden">
                    {arrayLinks.map((link, index) =>{
                        return (
                            <li key={index}>
                                <Link href={link.links} className={cn("text-lg font-secondary" , { "text-gold-300 font-bold" : index==2 })}>{link.name}</Link>
                            </li>
                        )
                    } )}
                </ul>

                {session === undefined?
                    <div className="loader"></div>:
                    session ? 
                    <Avatar  src={session.user?.image ?? ""}/>:
                    <Button onClick={() => signIn("discord")} className="rounded-xl" size={"default"} variant={"default"}>Log in</Button>
                }

                {showBar && ( width ?? 0 <= 768) && <Thebar disableFunc={() => setShowBar(false)}/>}
            </div>
        </header>
    )
}

function Thebar ({disableFunc} : {disableFunc : () => void}) {
    return (
        <div className="w-screen h-screen absolute top-0 left-0 bg-dark-300">
            <div style={{backgroundImage : "url(/logo.svg)"}} className="w-screen opacity-20 bg-center z-0 h-screen bg-cover absolute left-0 top-0" />
            <div className="flexBetween gap-5 p-5 z-20 relative">
                <Logo size={30} />
                <Button onClick={disableFunc} className="rounded-xl" size={"icon"} variant={"default"}><FaX size={30} /></Button>
            </div>
            <div className="flexCol gap-20 relative z-20 my-20">
                {arrayLinks.map((link, index) =>{
                    return (
                        <div key={index}>
                            <Link href={link.links} className={cn("text-2xl font-secondary" , { "text-gold-300 font-bold" : index==2 })}>{index == 2 ? link.name.slice(0 , link.name.length -2 ) : link.name}</Link>
                        </div>
                    )
                } )}
            </div>

           <MediaLink  className="flexCenter relative gap-10 z-20"/> 
        </div>
    )
}
