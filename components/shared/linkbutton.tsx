import React from "react";
import Link from "next/link";
import { Button, ButtonProps } from "../ui/button";
import { cn } from "@/lib/utils";

interface Props {
    href? : string;
    classNameLink? : string;
    children : React.ReactNode;
}

export default function LinkButton({href ,classNameLink ,  children, ...props}:Props & ButtonProps) {
    
    return (
        <Link href={href || ""} className={cn("overflow-hidden hover:scale-105 transition-transform" , classNameLink)}>
            <Button {...props} className={props.className + " rounded-xl"}>
                {children}
            </Button>
        </Link>
    )
}