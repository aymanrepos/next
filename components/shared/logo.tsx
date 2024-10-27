import { cn } from "@/lib/utils";
import Image from "next/image";
import  Link from "next/link";

interface Props {
    className? : string,
    size : number
}

export default function Logo({className = "" , size}:Props) {
    return (
        <Link href={"/"} className={cn("flexStart gap-5" , className)}>
            <Image src="/logo.svg" alt="logo" width={size} height={size} />
        </Link>
    )
}