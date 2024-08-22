import { useEffect, useState } from "react";

import { useAcessTokenContext } from "@/context/accessTokenContext";
import UseGetArtistData from "@/service/hooks/useGetArtistsData";

import Loader from "../loader";
import CardArtista from "../cardArtista";
import ErroMessage from "../erroMessage";

export default function HomeScreen(){
    const [ loading, setLoading ]= useState(true);
    const [ artistasList, setArtistasList ]= useState(null);
    const [ errorMessage, setErrorMessage]= useState(false)

    const { accessToken }= useAcessTokenContext();
    const { getAllArtistData }= UseGetArtistData();
   

    const buscaDados= async ()=>{
        try {
            const response= await getAllArtistData();

            if(response){
                //setando os dados dos artistas num estado para renderização
                setArtistasList(response)
                setLoading(false)   
            
            }else{
                setLoading(false) 
                //setando o estado erro verdadeiro para poder retornar para o usuário 
                //uma mensagem informando a situação, caso o retorno response seja nulo
                setErrorMessage(true)
            }
            return response
        }catch(error){
            
            return error
        }
    }
    
    useEffect(()=>{
         
        if(accessToken){
            buscaDados();
        }
        
    }, [accessToken])

    return(
        <>
        <section className=" px-[2%] flex flex-col gap-3 py-5 523px:py-2">

            {errorMessage && 
                <ErroMessage/>
            }

            {loading &&
                <Loader/>
            }

            {!loading && artistasList &&
                <>
                    <h2 
                        className=" mx-8 text-white font-bold 743px:text-sm 523px:text-xs 
                        418px:text-[9px] "
                    >
                        Bem vindo(a), Lista de Todos Artistas Disponíveis 
                    </h2>

                    {artistasList.map((item, index)=>{
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
