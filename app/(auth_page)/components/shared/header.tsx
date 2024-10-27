'use client'
import Logo from "@/components/shared/logo";
import { Bartoogle } from "@/lib/slice/dashboardinfobarslice";
import { RootState } from "@/lib/store";
import Link from "next/link";
import { IoCode, IoMenu } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { FaXmark } from "react-icons/fa6";


export default function Header() {

    const dispatch = useDispatch();
    const value = useSelector((state : RootState) => state.bars.value)
    return (
        <header className="bg-dark-300">
            <div className="container flexBetween py-2">
            <div className="flexStart gap-5">
                {
                    !value ? 
                    <IoMenu size={50} onClick={() => dispatch(Bartoogle())} className="text-gold-500 rounded-xl md:hidden border-2 border-gold-500 cursor-pointer bg-black"/> : 
                    <FaXmark size={50} onClick={() => dispatch(Bartoogle())} className="text-gold-500 rounded-xl md:hidden border-2 border-gold-500 cursor-pointer bg-black"/>
                }
            <Logo size={50}/>
            </div>

            <div className="flexStart gap-5">

            <Link href="/docs" className="flexStart gap-1 text-gold-300"><IoCode size={30} /> Commands</Link>
            <Link href="/support" className="flexStart gap-1 text-gold-300"><MdOutlineSupportAgent size={30} /> Support</Link>

            </div>
        </div>
        </header>
    )
}
