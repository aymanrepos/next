"use client"

import { motion } from "framer-motion";
import "./style.css";
import Image from "next/image";

import LinkButton from "../shared/linkbutton";
import * as IconsIo from "react-icons/io5";
import { arrayFeatures, FeaturesProps } from "@/app/constants";

export default function EasySetup() {

    // reference 


    return (
        <section className=" lg:py-20 py-48  relative">
            <div className="my-blur bg-gold-500 z-0 w-48 h-48 right-0 top-48"></div>
            <div className="my-blur bg-gold-500 z-0 w-48 h-48 left-0 bottom-0"></div>

            <div className="container">
                {/* <h2 className="text-gold-400 text-5xl md:text-6xl font-secondary font-bold">Easy Setup</h2> */}

                {arrayFeatures.map((feature, index) => (
                    <Box key={index} index={index} {...feature} />
                ))}

                {/* <motion.video ref={ref} style={{scale : scrollYProgress}} className="w-full mt-10 lg:mt-20 rounded-3xl" muted autoPlay loop>
                    <source src="/v.mp4" type="video/mp4" />
                </motion.video> */}
            </div>
        </section>
    )
}

function Box({ imgURL, header: { icon, title: miniTitle }, title, desc, btnText, btnURL , index}: FeaturesProps & {index : number}) {

    
    const Icon = IconsIo[icon];

    return (
        <motion.div  className={"mt-48 relative z-20 max-lg:flexCol gap-5 lg:flexBetween " + (index % 2 ==0 ? "" : "lg:flex-row-reverse")}>

                <Image src={imgURL} alt="logger chat image" width={500} className="rounded-2xl max-lg:w-full lg:w-5/12 mx-auto" height={100} />
          

            <div className="lg:w-5/12 lg:bg-dark-300 p-10 rounded-xl">
                <div className="flexStart gap-3">
                    <Icon className="text-gold-400 bg-dark-400 rounded-2xl p-3" size={50} />
                    <h3 className="text-xl font-bold font-secondary text-slate-400 uppercase">{miniTitle}</h3>
                </div>
                <h1 className="text-5xl mt-5 text-gold-300 font-bold font-secondary">{title}</h1>
                <p className="text-slate-300 leading-relaxed  my-5">{desc}</p>
                <LinkButton href={btnURL} className="w-full">{btnText}</LinkButton>
            </div>
        </motion.div>
    )
}