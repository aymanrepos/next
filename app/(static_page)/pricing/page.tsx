"use client"



import "./style.css"
import { motion } from "framer-motion"
import Image from "next/image"
import { lawliet, logger } from "@/app/assets/img"
import { CiCircleCheck } from "react-icons/ci"
import { Button } from "@/components/ui/button"


export default function Pricing() {
    return (
        <section className="py-36 relative">
            <div className="container">
                <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="container z-20 relative" transition={{ delay: .1 }}>
                    <h2 className="text-center font-secondary font-bold  text-5xl max-w-4xl !leading-snug mx-auto">Unlock Advanced Management for Your Discord Server</h2>
                    <p className="text-center text-dark-600 text-sm lg:text-lg my-5 lg:my-10 max-w-xl lg:max-w-2xl mx-auto !leading-tight">
                        Choose a plan that fits your server needs. Get advanced tools like custom bots, security, and automation to enhance your Discord experience.
                    </p>


                </motion.div>


                <div className="grid grid-cols-2 gap-5 mt-48">
                    <div className="p-10 bg-dark-300 rounded-xl">
                        <h3 className="text-center text-2xl"><span className="font-black font-secondary text-gold-300 text-7xl">10$</span>/Monthly</h3>
                        <h2 className="text-3xl mt-10">Get Tier 1</h2>
                        <p className="my-5 text-slate-400">For growing servers that need better member interaction.</p>

                        <div className="flexStart gap-5">
                            <Image src={lawliet} alt="discord" width={50} height={50} className="rounded-full" />
                            <h3 className="text-lg font-bold font-secondary text-gold-300">Prime lawliet</h3>
                        </div>
                    
                        
                        <div className="flexStart mt-5 gap-5">
                            <div className="w-[50px]">
                                <CiCircleCheck className="text-gold-300 mx-auto" size={30} />
                            </div>
                            <h3 className="text-lg font-bold font-secondary text-gold-300">Custom Bots</h3>
                        </div>
                        <div className="flexStart mt-5 gap-5">
                            <div className="w-[50px]">
                                <CiCircleCheck className="text-gold-300 mx-auto" size={30} />
                            </div>
                            <h3 className="text-lg font-bold font-secondary text-gold-300">Special Bots for Server</h3>
                        </div>

                        <Button variant={"outline"} className="w-full mt-10">Get it Right now!</Button>
                    </div>








                    <div className="p-10 bg-gold-500 text-white rounded-xl">
                        <h3 className="text-center text-white text-2xl"><span className="font-black font-secondary text-dark-300 text-7xl">30$</span>/Monthly</h3>
                        <h2 className="text-3xl mt-10 text-white">Get Tier 2</h2>
                        <p className="my-5 text-slate-300">For growing servers that need better member interaction.</p>

                        <div className="flexStart gap-5">
                            <Image src={logger} alt="discord" width={50} height={50} className="rounded-full" />
                            <h3 className="text-lg font-bold font-secondary text-dark-300">Logger Prime</h3>
                        </div>
                        <div className="flexStart mt-5 gap-5">
                            <div className="w-[50px]">
                                <CiCircleCheck className=" mx-auto" size={30} />
                            </div>
                            <h3 className="text-lg font-bold font-secondary ">All Ecliptic Bots Prime</h3>
                        </div>
                        <div className="flexStart mt-5 gap-5">
                            <div className="w-[50px]">
                                <CiCircleCheck className=" mx-auto" size={30} />
                            </div>
                            <h3 className="text-lg font-bold font-secondary ">Special Bots for Server</h3>
                        </div>

                        <Button variant={"destructive"} className="w-full mt-10">Get it Right now!</Button>
                    </div>

                </div>
            </div>
        </section>
    )
}