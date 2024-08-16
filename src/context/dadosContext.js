'use client'
import { createContext, useContext, useState,  } from "react";

const DadosContext = createContext({});

export function DadosProvider (props) {
  const [popArtistsDados, setPopArtistsDados]= useState("");

  
  const filtraOrdenaArtistasPop = (allDados)=>{
    
    //funcaao para filtrar todos os artistas pop da lista solicitada a api
    const popArtists = allDados.filter(artist => artist.genres.includes('pop'));

    //após o filtro usamos uma comparação entre os artistas por sua quantidade de seguidores
    //e assim definir a ordem da lista a ser retornada para o usuário
    const ordenaBySeguidores = popArtists.sort((a, b) => {
        return b.followers.total - a.followers.total;
    });
    //setando os dados dos artistas pops.
    setPopArtistsDados(ordenaBySeguidores)

  }

  return (
    <DadosContext.Provider
      value={{
        popArtistsDados,
        filtraOrdenaArtistasPop
      }}
    >
      {props.children}
    </DadosContext.Provider>
  );
};

export const useDadosContext = () => {
    return useContext(DadosContext);
};