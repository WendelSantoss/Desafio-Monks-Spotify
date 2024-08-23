import Logo from "../assets/logoIcon.png"
import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return(
        <header 
            className=" flex px-[2%] py-7 justify-between ">
            
            <Link 
                href='/' 
                className="hover:scale-110 transition-transform duration-300"
            
            >
                <Image 
                    className=" ml-8 w-28 h-28 rounded-3xl 743px:w-[90px] 743px:h-[90px]
                    743px:rounded-2xl 523px:w-[70px] 523px:h-[70px] 523px:rounded-xl 523px:mx-5" 
                    src={Logo} alt="Logo"
                />
            </Link>

            <div className=" flex items-end mr-8 523px:mx-5">
                <nav className=" flex gap-24  743px:gap-12 523px:gap-6 ">
                    <Link 
                        className="hover:scale-[1.28] transition-transform duration-[600ms]
                        "
                        href='/popRank'
                    > 
                        <p 
                            className=" text-white font-bold 743px:text-[12px] 418px:text-[10px]"
                        >
                            Rank Artistas Pop
                        </p>
                    </Link>
                    
                    <Link 
                        className="hover:scale-[1.28] transition-transform duration-[600ms]
                        " 
                        href='/generoRank'
                    > 
                        <p className=" text-white font-bold 743px:text-[12px] 418px:text-[10px]">
                            Rank Gêneros
                        </p>
                        
                    </Link>
                </nav>
            </div>

        </header>
    )
}