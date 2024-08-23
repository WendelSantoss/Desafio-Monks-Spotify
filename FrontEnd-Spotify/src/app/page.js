'use client'
import { useEffect } from "react";
import { AuthAcessToken } from "@/service/authAcessToken";

import HomeScreen from "@/components/screens/homeScreen";

export default function Home() {
  const { getAcessToken }= AuthAcessToken();

  useEffect(()=>{
    //funcao que faz a autenticação e gera o AccessToken 
    //assim que o usuário abre a aplicação
    getAcessToken()

  },[])
  return (
   <>
      <HomeScreen/>
   </>
  );
}
