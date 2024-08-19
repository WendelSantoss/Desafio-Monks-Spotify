import Logo from "../assets/logoIcon.png"
import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return(
        <header className="flex px-[2%] py-7 justify-between">
            
            <Link href='/' className="hover:scale-110 transition-transform duration-300">
                <Image className=" ml-8 w-28 h-28 rounded-3xl" src={Logo} alt="Logo"/>
            </Link>

            <div className=" flex items-end">
                <nav className=" flex gap-28 mr-16">
                    <Link 
                        className=" hover:scale-150 transition-transform duration-[600ms] "
                        href='/popRank'
                    > 
                        <p className=" text-white font-bold ">
                            Rank dos Artistas Pop
                        </p>
                    </Link>
                    <Link 
                        className=" text-white hover:scale-150 transition-transform duration-[600ms] font-bold " 
                        href='#'
                    > 
                        <p className=" text-white font-bold ">
                            Rank dos Gêneros
                        </p>
                        
                    </Link>
                </nav>
            </div>

        </header>
    )
}