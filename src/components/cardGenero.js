import { useDadosContext } from "@/context/dadosContext";
import Image from "next/image";


export default function CardGenero({dados, tempoSlide, topTittle, image}){

    const { popArtistsDados } = useDadosContext(); 

    const filtraArtistaReference = () =>{
        //funcao onde filtro o primeiro artista com maior número de seguidores
        //relacionado ao gênero, setando como o artista referência desse gênero
        const artistaReference = popArtistsDados.filter(item => item.genres.includes(`${dados[0]}`))
        return artistaReference[0].name
    }

    return(
        <>
            <div 
                className="animate-slideIn"
                style={{animationDelay: tempoSlide,  opacity: 0 }}  

            >
                <div 
                    className=" mx-8 flex  bg-zinc-950 hover:scale-105 rounded-lg
                    transition-transform duration-[600ms] gap-4 p-5 relative 523px:mx-5
                    523px:px-[14px] 523px:gap-2 418px:px-[10px] 418px:py-3" 
                >
                     <Image 
                        src={image} 
                        width={100} height={100} alt="imagem Pop"
                        className=" rounded-sm 743px:w-[80px] 743px:h-[84px] 523px:w-[68px] 
                        523px:h-[72px] 418px:w-[60px] 418px:h-[64px]"
                    />

                    <div className=" flex flex-col">

                        <div className=" flex gap-2 523px:gap-1">
                            
                            <p 
                                className="text-white text-[24px] 743px:text-[18px]
                                523px:text-[15px] 418px:text-[10.8px]"
                            >
                                Gênero:
                            </p>

                            <p 
                                className="text-lime-500 text-[20px] mt-[2px] font-bold 
                                743px:text-[18px] 743px:mt-[0px] 523px:text-[15px] 
                                418px:text-[10.8px]"
                            >
                               {dados[0]}.
                            </p>

                        </div>

                        <div className=" flex gap-2 743px:gap-1 418px:gap-[2px]">
                        
                            <p 
                                className="text-white text-[14px] mt-[1px] 743px:text-[12px]
                                523px:text-[11px] 418px:text-[9px]"
                            >
                                Referência no gênero: 
                            </p>
                            <p 
                                className="text-white text-[14px] mt-[1px] font-bold 
                                743px:text-[12px] 523px:text-[11px] 418px:text-[9px]"
                            >
                                {filtraArtistaReference()}.
                            </p>

                        </div>
                        
                        <p 
                            className="text-white text-[14px] mt-[1px] 743px:text-[12px]
                            523px:text-[11px] 418px:text-[9.2px]"
                        >
                            Frequência: Esse gênero surgiu {dados[1]} vezes entre os artistas pesquisados.
                        </p>

                    </div>

                    <div 
                        className=" flex flex-col items-center absolute right-0 top-0 
                        bg-lime-500 p-1 rounded-md 523px:p-[2px] 418px:py-[1px]"
                    >
                        <p 
                            className="text-black font-bold text-[12px] text-center 
                            523px:text-[10px] 418px:text-[8px]"
                        >
                            TOP<br/>{topTittle}
                        </p>
        
                    </div>  


                </div>

            </div>

        </>
    )
}