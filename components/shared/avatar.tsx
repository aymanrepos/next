import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { BookAIcon, LayoutDashboardIcon, LogOutIcon, MessageCircleQuestion } from "lucide-react"
import { signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

export default function Avatar({ src }: { src?: string }) {
    return (
        <Menubar >
            <MenubarMenu>
                <MenubarTrigger><Image src={src as string} width={50} height={50} alt="avatar" className=" cursor-pointer rounded-full" /></MenubarTrigger>
                <MenubarContent className="bg-dark-200 text-light font-primary rounded-xl">
                    <MenuItem link="/dashboard">
                        <LayoutDashboardIcon size={20} />
                        <span>Dashboard</span>
                    </MenuItem>

                    <MenuItem link="/support">
                        <MessageCircleQuestion size={20} />
                        <span>Support</span>
                    </MenuItem>

                    <MenuItem link="/docs">
                        <BookAIcon size={20} />
                        <span>Docs</span>
                    </MenuItem>

                   <MenubarSeparator />
                
                    <MenubarItem  onClick={() => signOut() }  className="flexStart gap-6 hover:bg-gold-500  cursor-pointer transition-all rounded-xl hover:text-bg_color">
                        <LogOutIcon size={20} />Log out
                    </MenubarItem>
                
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    )
}

interface Props {
    children: React.ReactNode,
    link : string,
}
function MenuItem({ children , link }: Props) {
    
    return (

            <Link href={link}>
                <MenubarItem className="flexStart gap-3 hover:bg-gold-500 cursor-pointer transition-all rounded-xl hover:text-bg_color">
                  {children}
                </MenubarItem>
            </Link>
    )
}
