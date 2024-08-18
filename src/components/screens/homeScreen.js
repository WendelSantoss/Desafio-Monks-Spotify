import { useEffect, useState } from "react";

import { useAcessTokenContext } from "@/context/accessTokenContext";
import UseGetArtistData from "@/service/hooks/useGetArtistsData";

import Loader from "../loader";
import CardArtista from "../cardArtista";

export default function HomeScreen(){
    const {accessToken}= useAcessTokenContext();
    const {getAllArtistData}= UseGetArtistData();
    const [ loading, setLoading]= useState(true);
    const [ artistasList, setArtistasList]= useState(null);

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
        <section className=" px-[2%] flex flex-col gap-3 py-5">
            {loading ?
                <div className=" flex justify-center items-center h-[350px]">
                    <Loader/>
                </div>
            :
                <>
                    <h2 className=" mx-8 text-white font-bold">
                        Bem vindo(a), Lista de Todos Artistas Disponíveis 
                    </h2>

                    {artistasList.map((item, index)=>{
                        //time dinamico para passaar um delay de aparição diferente pra cada card
                        const tempoSlide = `${index * 250}ms`
                        return <CardArtista dados={item} tempoSlide={tempoSlide}/> 
                    
                    })}
                </>

            }
        </section>


        </>
    )
}  
