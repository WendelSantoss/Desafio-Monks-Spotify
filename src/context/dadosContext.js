'use client'
import { createContext, useContext, useState,  } from "react";

const DadosContext = createContext({});

export function DadosProvider (props) {
  const [ popArtistsDados, setPopArtistsDados ]= useState(null);
  const [ generoRank, setGeneroRank ]= useState(null) 


  
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

  const filtraOrdenaGeneroRank = (allDados)=>{
    
    //objeto onde irei adicionar os gêneros mais comuns dentre os artistas
    const genreCounts = {};

    //funcao realiza a checagem dos gêneros que mais se repetem e adiciona ao objeto
    allDados.forEach((artist) => {
      artist.genres.forEach((genre) => {
        genreCounts[genre] = (genreCounts[genre] || 0) + 1;
      })
    });

    //funcao que conta a frequencia dos generos e os ordena a partir disso 
    const ordenandoGeneros = Object.entries(genreCounts).sort((a, b) => b[1] - a[1]);

    //aqui realizamos o corte do array pegando os primeiros 5 generos mais comuns
    const top5Genres = ordenandoGeneros.slice(0, 5);


    setGeneroRank(top5Genres)
  }

  return (
    <DadosContext.Provider
      value={{
        popArtistsDados,
        filtraOrdenaArtistasPop,
        generoRank,
        filtraOrdenaGeneroRank
      }}
    >
      {props.children}
    </DadosContext.Provider>
  );
};

export const useDadosContext = () => {
    return useContext(DadosContext);
};