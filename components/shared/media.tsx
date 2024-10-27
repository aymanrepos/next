import Link from "next/link";
import { FaDiscord, FaYoutube } from "react-icons/fa";


export default function MediaLink({className} : {className : string}) {
    return (
        <div className={className}>
            <Link href="https://discord.gg/ecliptic" target="_blank">
                <FaDiscord className="text-gold-300" size={40}/>
            </Link>
            <Link href="https://www.youtube.com/@ecliptic-dev" target="_blank">
                <FaYoutube className="text-gold-300" size={40}/>
            </Link>

        </div>
    )
}
