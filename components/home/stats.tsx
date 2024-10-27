"use client"

import { motion } from "framer-motion";
import { arrayStats } from "@/app/constants";
import * as IconFa from 'react-icons/hi';

export default function Stats() {


    return (
        <section className="-translate-y-16">
            <div className="container max-md:flexCol md:flexCenter text-gold-300">
                {arrayStats.map((stat, i) => {
                    const Icon = IconFa[stat.icon];
                    return (
                        <motion.div
                        initial={{x: manageAnimation(i) * 50, opacity: 0}}
                        transition={{duration : 1}}
                        animate={{x: 1 , opacity: 1  }} key={i} className={(i == 1? "md:border-r-4 md:border-l-4 " : "") + " flexCol w-60 py-4 gap-5 border-gold-500"}>
                            <Icon size={50} />
                            <p className="text-lg font-secondary text-center font-semibold">{stat.name}</p>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}


function manageAnimation(i:number){
    if(i==0) return -1;
    if(i==2) return 1;
    return 1/50;
}