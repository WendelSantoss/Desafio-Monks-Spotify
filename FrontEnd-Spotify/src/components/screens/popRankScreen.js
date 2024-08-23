'use client'
import { useEffect, useState } from "react"

import Loader from "../loader";
import CardArtista from "../cardArtista";
import ErroMessage from "../erroMessage";

import { useAcessTokenContext } from "@/context/accessTokenContext";
import { useDadosContext } from "@/context/dadosContext";
import UseGetArtistData from "@/service/hooks/useGetArtistsData"

export default function PopRankScreen(){
    const [ loading, setLoading ]= useState(true)
    const [ errorMessage, setErrorMessage]= useState(false)

    const { accessToken }= useAcessTokenContext();
    const { popArtistsDados } = useDadosContext(); 
    const { getAllArtistData }= UseGetArtistData();

    
    const buscaDados= async ()=>{
        try {
            const response= await getAllArtistData();
       
            if(response){
                setLoading(false)

            }else{
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
        if(accessToken && !popArtistsDados){
            buscaDados();

        }else if(popArtistsDados){
            //aqui seria a condiçao de quando o usuario acesse essaa 
            //com o fluxo normal atraves da homepage
            setLoading(false);
        }
    }, [accessToken, popArtistsDados]);

    return(
        <>
         <section className=" px-[2%] flex flex-col gap-3 py-5 523px:py-2">
            
            {errorMessage && 
                <ErroMessage/>
            }

            {loading &&
                <Loader/>
            }

            {!loading && popArtistsDados &&            
                <>
                    <h2 
                        className=" mx-8 text-white font-bold 743px:text-sm 523px:text-xs
                        523px:mx-5 418px:text-[10px]"
                    >
                        Rank dos Artistas Pop, ordenados por números de seguidores
                    </h2>
                    {popArtistsDados.map((item, index)=>{
                        //time dinamico para passaar um delay de aparição diferente pra cada card
                        const tempoSlide = `${index * 250}ms`
                        return <CardArtista dados={item} tempoSlide={tempoSlide} key={item.id}/> 
                    
                    })}
                </>
            }

         </section>
        </>
    )

}