import {APIPostBack} from "@/service/api"


export async function PostRanksData( popRank, genreRank ){

    //mapear generoRank e formatar para o padrao exigido no enunciado
    const popRankModelado = popRank.map(artist => ({
        artist_name: artist.name,
        followers: artist.followers.total
    }));

    //mapear generoRank e formatar para o padrao exigido no enunciado
    const genreRankModelado = genreRank.map(genre => genre[0]);

    const data = {
        github_url: "https://github.com/WendelSantoss/Desafio-Monks-Spotify",
        name: "Wendel Santos da Silva Júnior",
        pop_ranking: popRankModelado,
        genre_ranking: genreRankModelado,
    }
   
       
    try {
        const response = await APIPostBack.post("api/sendPostRanks", data);
        console.log("Retorno do Back:", response)
        return response

    }catch(error){
        console.error("Erro ao enviar os dados:", error.message);
        return null;
    }
};