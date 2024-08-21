import Image from "next/image"

export default function CardArtista({dados, tempoSlide}){
    
    //formataçao dos generos dos artistas que não possuem todos 3 generos 
    //para serem retornados corretamente
    const quantidadeGenero = ()=>{
        if( dados.genres[0] && dados.genres[1] && dados.genres[2]){
            return `${dados.genres[0]}, ${dados.genres[1]} e ${dados.genres[2]}`
        }else if( dados.genres[0] && dados.genres[1]){
            return `${dados.genres[0]} e ${dados.genres[1]}`
        }else if(dados.genres[0]){
            return `${dados.genres[0]}`
        }else{
            return "Gêneros não disponíveis"
        }
    }
    return(
        <>  
            <div 
                className="animate-slideIn"
                style={{animationDelay: tempoSlide,  opacity: 0 }}  

            >

                <div 
                    className=" mx-8 flex  bg-zinc-950 hover:scale-105 rounded-lg
                    transition-transform duration-[600ms] gap-4 p-5 relative 523px:p-4
                    523px:mx-5 418px:gap-2 418px:px-[12px]" 
                >
                    <Image 
                        src={dados.images[2].url} 
                        width={100} height={100} alt="imagem do artista"
                        className=" rounded-sm 743px:w-20 743px:h-20 523px:w-16 523px:h-16
                        418px:w-14 418px:h-14"
                    />
                    
                    <div className=" flex flex-col"> 

                        <h1 
                            className=" text-[32px] text-lime-500 font-bold 743px:text-[18px]
                            523px:text-[14px] 418px:text-[11px]"
                        >
                            {dados.name}
                        </h1>

                        <div 
                            className="flex gap-2 mt-1 items-center 523px:gap-[3px] 418px:text-[10px]
                            418px:mt-0"
                        >
                            <h4 
                                className="text-white 743px:text-[12px] 523px:text-[9px] 
                                418px:text-[8px] 418px:mt-[1px]">
                                Gênero:
                            </h4>
                            <p 
                                className="text-white font-bold text-[12px] mt-[1px] 523px:text-[9px]
                                418px:text-[8px] ">
                                {quantidadeGenero()}.
                            </p>
                            
                        </div>

                        <div className="flex gap-2 mt-1 items-center 523px:gap-[3px] 418px:mt-[2px]">
                            <h4 
                                className="text-white 743px:text-[12px] 523px:text-[10px] 
                                418px:text-[8px] 418px:mt-[1px]">
                                Seguidores:
                            </h4>
                            <p 
                                className="text-white font-bold text-[14px] mt-[1px] 743px:text-xs
                                523px:text-[10px] 418px:text-[8px]">
                                {dados.followers.total} followers.
                            </p>
                        </div>
                    
                        <div 
                            className=" flex flex-col items-center absolute right-0 top-0 
                            bg-lime-500 p-1 rounded-md 418px:py-[2px]"
                        >
                            <p 
                                className="text-black font-bold text-[12px] 743px:text-[10px] 
                                523px:text-[8px] 418px:text-[7px]"
                            >
                                Índice
                            </p>
                            <p 
                                className="text-black font-bold text-[12px] 743px:text-[10px] 
                                523px:text-[8px] 418px:text-[7px]"
                            >
                                {dados.popularity}
                            </p>
                        </div>  
                    </div>

                </div>
            </div>
       
        </>
    )
}