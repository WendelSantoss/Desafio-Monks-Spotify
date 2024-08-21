import { useEffect, useState } from "react";

import { useAcessTokenContext } from "@/context/accessTokenContext";
import UseGetArtistData from "@/service/hooks/useGetArtistsData";

import Loader from "../loader";
import CardArtista from "../cardArtista";

export default function HomeScreen(){
    const [ loading, setLoading ]= useState(true);
    const [ artistasList, setArtistasList ]= useState(null);

    const { accessToken }= useAcessTokenContext();
    const { getAllArtistData }= UseGetArtistData();

    const buscaDados= async ()=>{
        try {
            const response= await getAllArtistData();
            setArtistasList(response)
            if(response){
                console.log(response)
                setLoading(false)   
            }
        }catch(error){
            console.log(error.message)
        }
    }
    
    useEffect(()=>{
        if(accessToken){
            buscaDados()
        }
    }, [accessToken])

    return(
        <>
        <section className=" px-[2%] flex flex-col gap-3 py-5 523px:py-2">
            {loading ?
                
                <Loader/>
              
            :
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
