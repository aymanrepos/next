"use client"
import "./css/animation.css"
import "./css/style.css"

import Header from "@/components/home/header";
import Stats from "@/components/home/stats";
import Hero from "@/components/home/hero";
import EazySetup from "@/components/home/eazySetup";
import MeetOurBot from "@/components/home/meetOurBot";
import Footer from "@/components/home/footer";


export default  function App(){
  
    
  return (
    <>
    <div className="blur-home bg-gold-400" />
    
      <Header />
      <Hero />
      <Stats />
      <MeetOurBot />
      <EazySetup />
      <Footer />
    </>
  )
}
