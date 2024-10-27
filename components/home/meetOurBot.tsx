"use client"
import { FaBookOpen, FaPlus } from "react-icons/fa";

import LinkButton from "../shared/linkbutton";
import "./style.css"
import "../../app/css/animation.css"

import Image from "next/image";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { arrayBots, BotProps } from "@/app/constants";
import { useState } from "react";
import { Autoplay } from "swiper/modules";

import useWindowSize from "@/hooks/useWindowSize";
import { MdVerified } from "react-icons/md";


export default function MeetOurBot() {
    // get windows size
    const { width } = useWindowSize();
    return (
        <section className=" lg:py-20 py-10 relative">
            <div className="my-blur bg-gold-500 w-48 h-48 right-0 top-48"></div>
            <div className="container">
                <h2 className="text-gold-400 text-4xl md:text-6xl font-secondary text-center font-bold">Meet our Bots</h2>

                <Swiper
                    spaceBetween={200}
                    className="mt-20"
                    slidesPerView={(width ?? 0) > 1230 ? 3 : (width ?? 0) > 998 ? 2 : 1}
                    autoplay={
                        {
                            delay: 2500,
                        }
                    }
                    modules={[Autoplay]}
                >
                    {arrayBots.map(e => {
                        return (
                            <SwiperSlide key={e.name}><Box {...e} /></SwiperSlide>
                        )
                    })}

                </Swiper>
            </div>
        </section>
    )
}


function Box({ name, imgURL, desc, inviteURL, docsURL }: BotProps) {

    // increase length of slide
    const [word, setword] = useState<number>(100)


    if (word > desc.length) setword(desc.length);
    return (
        <div className={" p-4 py-10 rounded-2xl bg-dark-300"}>
            <Image src={imgURL} alt={name} width={100} className="rounded-3xl mx-auto" height={100} />
            <div className="">
                <div className="flexCenter gap-3">
                    <h3 className="text-2xl my-3 font-bold font-secondary text-gold-300">{name}</h3>
                    <MdVerified size={25} className="text-blue-500" />
                </div>
            </div>

            <div className="flexCenter gap-5 mt-5">
                <LinkButton classNameLink="" className=" flexStart gap-3" href={inviteURL}><FaPlus /> Invite Bot</LinkButton>
                <LinkButton classNameLink="" className=" flexStart gap-3" href={docsURL}><FaBookOpen size={20} />Docs</LinkButton>
            </div>
        </div>
    )
}

// this function is for set limit of desc by word
// to improve ui , for not appear like that "hello wor"

// function manageWords(desc: string, lengthLimit: number): number {
//     // check if we pass number of letter
//     if (desc.length < lengthLimit) return desc.length;

//     for (let i = 0; i < desc.length; i++) {
//         if (desc[i] == " " && i >= lengthLimit) {
//             return i;
//         }
//     }
//     return desc.length;
// }




// old version, i don't know if i will need it
/*

<div className="flexBetween items-stretch flex-wrap">
                    <div className="glass rounded-2xl relative bg-[#6c9ecb]/50 mt-10 w-full gap-10 flexStart  items-start">
                        <div className="absolute top-0 left-0 h-full w-full animate-pulse bg-[#6c9ecb] -z-10 blur-3xl" />
                        <Image src={serinas} className="max-md:hidden max-w-xs xl:max-w-2xl" alt="serinas img"  width={500} height={100}/>
                        <div className=" md:w-1/2 py-10 max-md:px-10 flexCol items-start">
                            <div>
                                <h3 className="text-white text-5xl lg:text-7xl font-secondary font-bold">Serinas</h3>
                                <p className="text-slate-300 lg:text-xl xl:text-3xl my-5 pr-3 max-lg:overflow-y-scroll myscroll leading-snug max-lg:max-h-40"></p>
                            </div>
                            
                            <div className="flexStart gap-5">
                            <LinkButton classNameLink="" size={"lg"} className="bg-[#cb4f43] flexStart gap-3" href="/serinas"><FaPlus /> Invite Bot</LinkButton>
                            <LinkButton classNameLink="" size={"lg"} className="bg-[#cb4f43] flexStart gap-3"  href="/serinas"><IoMdBook size={20}/>Docs</LinkButton>
                            </div>
                        </div>
                    </div>

                    <div className=" relative rounded-2xl w-full bg-gold-400/40 overflow-hidden mt-10 gap-10  loggerparent flexStart xl:w-5/12 items-start">
                        <div className="absolute inset-0 transition-opacity logger -z-10"></div>
                        
                        <div className=" p-10 h-full glass cursor-pointer flexCol relative items-start">
                            <div>
                                <h3 className="text-gold-300 text-3xl lg:text-5xl font-secondary font-bold">Logger</h3>
                                <p className="text-gold-400 text-lg my-5">
                                </p>
                            </div>
                            <div className="flexStart gap-5">
                            <LinkButton classNameLink="" className=" flexStart gap-3" href="/serinas"><FaPlus /> Invite Bot</LinkButton>
                            <LinkButton classNameLink="" className=" flexStart gap-3"  href="/serinas"><IoMdBook size={20}/>Docs</LinkButton>
                            </div>
                        </div>
                    </div>

                </div>

                */