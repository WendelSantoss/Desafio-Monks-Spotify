import { useAcessTokenContext } from "@/context/accessTokenContext"
import { API } from "../api";
import { artistIds } from "@/data/dataArtists";
import { useDadosContext } from "@/context/dadosContext";


export default function UseGetArtistData(){
    const {filtraOrdenaArtistasPop, filtraOrdenaGeneroRank}= useDadosContext();
    const {accessToken}= useAcessTokenContext();

    //funcao para buscar dados de um determinado artista através de seu Id
    const getArtistData = async (idArtist)=>{
        try{
            const responseArtist = await API.get(`artists/${idArtist}`, 
                {
                    headers: { "Authorization": `Bearer ${accessToken}`}
                }
            )
            
            return responseArtist?.data

        }catch(error){
            console.error("Erro ao buscar artista:", error.message);
            return error.message;
        }
    }

    const getAllArtistData = async () => {
                            
        try {            
            //percorro um map dentro do array com todos os artistas, para através dele resgatar todos dados
            const artistPromises = artistIds.map((artistId) => getArtistData(artistId));

            //utilização do promisse.all para esperar o retorno com todos os dados do artistPromises
            const artistsData = await Promise.all(artistPromises); 

            if(artistsData){
                //funcao que filtra e seta a lista de artistas pop no dadosContext.
                filtraOrdenaArtistasPop(artistsData)

                //funcao que filtra e seta a lista dos 5 generos mais comuns no dadosContext.
                filtraOrdenaGeneroRank(artistsData)

            }
            return artistsData; 

        }catch(error){
            console.error("Erro ao buscar dados dos artistas:", error.message);
        }
    }
    
    return{
        getArtistData,
        getAllArtistData
    }
}