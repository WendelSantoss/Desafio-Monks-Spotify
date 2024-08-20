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
                    transition-transform duration-[600ms] gap-4 p-5 relative" 
                >
                     <Image 
                        src={image} className=" rounded-sm"
                        width={100} height={100} alt="imagem Pop"
                    />

                    <div className=" flex flex-col">

                        <div className=" flex gap-2">
                            <p className="text-white text-2xl ">
                                Gênero:
                            </p>
                            <p className="text-lime-500 text-xl mt-[2px] font-bold">
                               {dados[0]}.
                            </p>

                        </div>
                        <div className=" flex gap-2">
                        
                            <p className="text-white text-sm mt-[1px]">
                                Artista referência desse genero, presente na lista: 
                            </p>
                            <p className="text-white text-sm mt-[1px] font-bold">
                                {filtraArtistaReference()}.
                            </p>

                        </div>
                        
                        <p className="text-white text-sm mt-[1px]">
                            Frequência: O gênero {dados[0]} apareceu {dados[1]} vezes entre os aritstas na lista de pesquisa.
                        </p>

                    </div>

                    <div 
                        className=" flex flex-col items-center absolute right-0 top-0 
                            bg-lime-500 p-1 rounded-md"
                    >
                        <p className="text-black font-bold text-xs text-center">
                            TOP<br/>{topTittle}
                        </p>
        
                    </div>  


                </div>

            </div>

        </>
    )
}