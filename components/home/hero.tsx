"use client"

import { useSession } from "next-auth/react"
import LinkButton from "../shared/linkbutton"
import "./style.css"
import { motion } from "framer-motion"

export default function Hero() {
    const {data : session} = useSession();
    return (
        <section className="py-36 relative">
            <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="container z-20 relative" transition={{ delay: .1 }}>
                <h2 className="text-center font-secondary font-bold  text-5xl lg:text-7xl max-w-lg lg:max-w-3xl !leading-snug mx-auto">Elevate your server&apos;s <span className="bg-gradient-to-l bg-clip-text tg from-gold-500 to-gold-300">excellence.</span></h2>
                <p className="text-center text-dark-600 text-sm lg:text-lg my-5 lg:my-10 max-w-xl lg:max-w-2xl mx-auto !leading-tight">
                    Effortlessly master your server with our bot. Automate tasks, streamline management, and keep your community thriving.
                </p>

                <div className="flexCenter gap-5">

                    <LinkButton href="/get-started" variant={'default'} size={"lg"}>Setup Bots</LinkButton>
                {session === undefined?
                    <div className="loader"></div>:
                    session ? 

                    <LinkButton href="/dashboard" variant={'outline'} size={"lg"}>Dashboard</LinkButton>:
                    <LinkButton href="https://discord.gg/ecliptic" variant={'outline'} size={"lg"}>Join Our Server</LinkButton>
                }

                </div>
            </motion.div>
        </section>
    )
}
