import { useEffect, useState } from "react"

import UseGetArtistData from "@/service/hooks/useGetArtistsData";
import { useDadosContext } from "@/context/dadosContext";
import { useAcessTokenContext } from "@/context/accessTokenContext";

import ErroMessage from "../erroMessage";
import Loader from "../loader";
import CardGenero from "../cardGenero";
import {CapasGenero} from "@/data/capasGeneros"


export default function GeneroRankScrenn(){
    const [ loading, setLoading ]= useState(true)
    const [ errorMessage, setErrorMessage]= useState(false)

    const { accessToken }= useAcessTokenContext();
    const { generoRank } = useDadosContext(); 
    const { getAllArtistData }= UseGetArtistData();

    
    const buscaDados= async ()=>{
        try {
            const response= await getAllArtistData();
       
            if(response){
                
                setLoading(false)   
            }else{
                console.log("entramos aqui com response nulo")
                setLoading(false) 
                //setando o estado erro verdadeiro para poder retornar para o usuário 
                //uma mensagem informando a situação, caso o retorno response seja nulo
                setErrorMessage(true)
            }
        }catch(error){
            return error
        }
    }

    
    useEffect(() => {
        
        
        //caso o usuario acesse diretamente a rota dessa page e ja tenhamos
        //um acessToken, aqui salvaremos os dados no DadosContext
        if(accessToken && !generoRank){
            buscaDados();
        
        }else if(generoRank){
            //aqui seria a condiçao de quando o usuario acesse essa rota 
            //com o fluxo normal atraves da homepage
            
            setLoading(false);
        }
    }, [accessToken, generoRank]);



    return(
        <>
        <section className=" px-[2%] flex flex-col gap-3 py-5 523px:py-2">

            {errorMessage && 
                <ErroMessage/>
            }

            
            {loading &&
                <Loader/>
            }


            {!loading && generoRank &&           
               <>
                    <h2 
                        className=" mx-8 text-white font-bold 743px:text-[13px]
                        523px:mx-5 523px:text-[11px] 418px:text-[10px] "
                    >
                        Rank dos 5 Gêneros mais comuns, dentre os artistas pesquisados
                    </h2>
                    {generoRank.map((item, index)=>{
                       //time dinamico para passaar um delay de aparição diferente pra cada card
                       const tempoSlide = `${index * 250}ms`

                       //contagem dinamica pra título
                       const topTittle = `${index + 1}`
                       
                    
                       // Capas dos gêneros sendo passadas dinamicamente
                       const capasImages = CapasGenero[index]?.picture;
                       return   <CardGenero
                                    key={index} dados={item} 
                                    tempoSlide={tempoSlide} 
                                    topTittle={topTittle}
                                    image={capasImages}
                                />
                    })}
               </>
            }

        </section>
       </>
    )
}