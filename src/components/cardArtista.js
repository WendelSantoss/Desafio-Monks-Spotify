import Image from "next/image"


export default function CardArtista({dados, tempoSlide}){
 
    return(
        <>  
            <div 
                className="animate-slideIn"
                style={{animationDelay: tempoSlide,  opacity: 0 }}  
            >

                <div 
                    className=" mx-8 flex  bg-zinc-950 hover:scale-105 
                    transition-transform duration-[600ms] gap-4 p-5 relative" 
                    
                    key={dados.id}
                >
                    <Image src={dados.images[2].url} width={100} height={100} alt="imagem do artista"/>
                    
                    <div className=" flex flex-col"> 

                        <h1 className=" text-2xl text-white font-bold">
                            {dados.name}
                        </h1>

                        <div className="flex gap-2 mt-1 items-center">
                            <h4 className="text-white font-bold">
                                Gênero:
                            </h4>
                            <p className="text-white text-sm mt-[1px]">
                                {`${dados.genres[0]}, ${dados.genres[1]} e ${dados.genres[2]} `}
                            </p>
                            
                        </div>

                        <div className="flex gap-2 mt-1 items-center">
                            <h4 className="text-white font-bold">
                                Seguidores:
                            </h4>
                            <p className="text-white text-sm mt-[1px]">
                                {dados.followers.total}
                            </p>
                        </div>
                    
                        <div className=" flex flex-col items-center absolute right-0 top-0  bg-lime-500 p-1">
                            <p className="text-black font-bold text-xs">
                                Índice
                            </p>
                            <p className="text-black font-bold text-xs">
                                {dados.popularity}
                            </p>
                        </div>  
                    </div>

                </div>
            </div>
       
        </>
    )
}