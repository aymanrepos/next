import Logo from "../shared/logo";

export default function Footer() {
    return (
        <section className="bg-dark-300 z-40 relative py-16">
            <div className="container gap-10 flexCol">
                <div className="flexCenter gap-5">
                    <Logo size={50}/>  
                    <p className="text-gold-300 text-lg">Ecliptic.dev</p>
                </div>

                <div className="flexCenter gap-5">
                    {links.map((link , index) =>{return(<a href={link.link} key={index} className="text-dark-700 text-lg">{link.name}</a>)})}
                </div>
                <div className="w-full bg-dark-700 h-px" />

                <p className="text-dark-700 text-lg">©2024 Ecliptic.dev. All rights reserved.</p>
            </div>
        </section>
    )
}

const links : {name : string , link : string}[] = [

    {name : "Terms of Service" , link : ""},
    {name : "Privacy Policy" , link : ""},
    {name : "Support" , link : "/support"},
    {name : "Docs" , link : "/docs"},
]

