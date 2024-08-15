import axios from "axios";
import { useAcessTokenContext } from "../context/accessTokenContext";


export function AuthAcessToken() {
  //funcao do context para setar dentro de um estado o acess token e compartilha-lo em todo app
  const{ setAccessToken }= useAcessTokenContext(); 

  //variáveis de ambiente com as chaves fornecidas pelo projeto no spotify;
  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;

  //funcao que irá realizar a autenticação com o spotify e conseguir um acess token
  //para validações de requisições
  const getAcessToken = async ()=>{
  
    try{

      const response = await axios.post('https://accounts.spotify.com/api/token', 
        'grant_type=client_credentials', {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64'),
          },
        }
      );
      console.log("token", response?.data.access_token)
      setAccessToken(response?.data.access_token)
      return response.data.access_token

    }catch(error){

      console.log("erro aqui", error.message)
      return error
    
    }
  };

  return{
    getAcessToken
  }
}