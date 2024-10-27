'use client'

import Header from "@/components/home/header";
import { signIn, useSession } from "next-auth/react";
import { redirect, useSearchParams } from "next/navigation";
import { AiOutlineDiscord } from "react-icons/ai";
import { Suspense } from "react";



export default function LoginPage(){
  const {data} = useSession();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginContent data={data} />
    </Suspense>
  )
}

function LoginContent({data}: {data: newSession}) {
  const params = useSearchParams();

  let message = "Sign In to Your Account";
  if ('true' === params?.get("redirect")) {
    message = "I think, You must Login first";
  }

  if (data?.user) {
    return redirect(params?.get("callback") || "/dashboard");
  }

  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold text-center pt-40">{message}</h1>
      <button onClick={() => {signIn('discord'); return redirect("/dashboard")}} className="mx-auto bg-[#5865F2] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-10 flexStart gap-3">
        <AiOutlineDiscord size={30} />
        Login with Discord
      </button>
    </>
  )
}
