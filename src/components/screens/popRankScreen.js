'use client'
import { useEffect, useState } from "react"

import Loader from "../loader";
import CardArtista from "../cardArtista";

import { useAcessTokenContext } from "@/context/accessTokenContext";
import { useDadosContext } from "@/context/dadosContext";
import UseGetArtistData from "@/service/hooks/useGetArtistsData"

export default function PopRankScreen(){
    const [ loading, setLoading ]= useState(true)

    const { accessToken }= useAcessTokenContext();
    const { popArtistsDados } = useDadosContext(); 
    const { getAllArtistData }= UseGetArtistData();

    
    const buscaDados= async ()=>{
        try {
            const response= await getAllArtistData();
       
            if(response){
              
                setLoading(false)   
            }
        }catch(error){
            console.log(error.message)
        }
    }


   
    useEffect(() => {
        //caso o usuario acesse diretamente a rota dessa page e ja tenhamos
        //um acessToken, aqui salvaremos os dados no DadosContext
        if(accessToken && !popArtistsDados){
            console.log("entrou aqui 2")
            buscaDados();
        }else if(popArtistsDados){
            //aqui seria a condiçao de quando o usuario acesse essaa 
            //com o fluxo normal atraves da homepage
            console.log("entrou aqui 3")
            setLoading(false);
        }
    }, [accessToken, popArtistsDados]);

    return(
        <>
         <section className=" px-[2%] flex flex-col gap-3 py-5">

            {loading?
                <Loader/>
                
                :
                
                <>
                    <h2 className=" mx-8 text-white font-bold">
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