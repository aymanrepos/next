
'use client'


import { RootState } from "@/lib/store";
// import { lawliet, logger } from "@/app/assets/img";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useSelector } from "react-redux";




export default function Dashboard({params }: {params : {serverID : string}}) {
    
 const {data : session} = useSession();
  const guilds = useSelector((state: RootState) => state.guilds.guildsHasAdmin);
  
  const guild : OAuthGuild[] = guilds.filter(e=> e.id === params.serverID);
  if(guild.length === 0 && guilds.length > 0) return <h3 className="text-3xl m-5 font-secondary font-bold">Oops!, i think you dont have enough permission in this Server</h3>

  if(guilds.length === 0) return <Loader /> 
  return (

    <div className="mr-10">
      {session?.user?

        <div>
          <Image 
            src={("https://cdn.discordapp.com/icons/"+ guild[0].id + "/" + guild[0].icon + ".webp")} 
            width={100} 
            height={100} 
            className="rounded-full mx-auto" 
            alt="avatar" />
          <p className="text-center mt-5 text-lg">{guild[0].name}</p>
        </div>
        :
        <div>
          <div className="rounded-full w-[100px] h-[100px] bg-dark-400 animate-pulse mx-auto"/>
          
          <div className="mt-10 rounded-full w-[400px] h-[20px] bg-dark-400 animate-pulse mx-auto"/>

        </div>
      }
      
      <div className="w-full h-4 rounded-xl mt-6 bg-gold-400" />
{/* 
      <div className="grid grid-cols-2 max-w-3xl mx-auto gap-3 mt-10">
        <Box img={logger} title="Logger"/>
      
        <Box img={lawliet} title="Lawliet Checker"/>
    
      </div> */} 
      
    </div>
  )
}

// loader for wait store get the server 

function Loader(){
  return (
  <div className="flexCol w-full mx-auto">
    <div className="loader"></div>
    <h3 className="text-3xl m-5 font-secondary font-bold">Loading...</h3>
  </div>
  )
}
//function Box({img , title} : {img : StaticImageData , title: string}) {
  //return (
    //<div className="rounded-xl p-3 border-2 border-gold-400" >
      //<Image src={img} alt="bot" className="rounded-full mx-auto" width={100} height={100} />
      //<h3 className="text-center mt-5 font-secondary font-bold text-lg text-gold-300">{title}</h3>
    //</div>
  //)
//}
