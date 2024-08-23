'use client'
import { useEffect } from "react";
import PopRankScreen from "@/components/screens/popRankScreen";


import { AuthAcessToken } from "@/service/authAcessToken";
import { useAcessTokenContext } from "@/context/accessTokenContext";

export default function PopRankPage(){
    const { accessToken }= useAcessTokenContext();
    const { getAcessToken }= AuthAcessToken();

    useEffect(() => {
        if(!accessToken) {
            
            //se não houver accessToken, caso o usuario acesse diretamente a
            //rota dessa page, aqui solicitamos um para poder resgatar os dados
            getAcessToken();
        }
    }, [accessToken]);

    return(
        <PopRankScreen/>
    )
}