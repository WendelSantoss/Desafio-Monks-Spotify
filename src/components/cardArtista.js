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
                    transition-transform duration-[600ms] gap-4 p-5 relative" 
                >
                    <Image 
                        src={dados.images[2].url} className=" rounded-sm"
                        width={100} height={100} alt="imagem do artista"
                    />
                    
                    <div className=" flex flex-col"> 

                        <h1 className=" text-2xl text-lime-500 font-bold">
                            {dados.name}
                        </h1>

                        <div className="flex gap-2 mt-1 items-center">
                            <h4 className="text-white font-bold">
                                Gênero:
                            </h4>
                            <p className="text-white text-sm mt-[1px]">
                                {quantidadeGenero()}.
                            </p>
                            
                        </div>

                        <div className="flex gap-2 mt-1 items-center">
                            <h4 className="text-white font-bold">
                                Seguidores:
                            </h4>
                            <p className="text-white text-sm mt-[1px]">
                                {dados.followers.total} followers.
                            </p>
                        </div>
                    
                        <div 
                            className=" flex flex-col items-center absolute right-0 top-0 
                             bg-lime-500 p-1 rounded-md"
                        >
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