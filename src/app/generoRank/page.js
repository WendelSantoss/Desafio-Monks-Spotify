'use client'
import { useEffect } from "react";

import { AuthAcessToken } from "@/service/authAcessToken";
import { useAcessTokenContext } from "@/context/accessTokenContext";
import GeneroRankScrenn from "@/components/screens/generoRankScreen";

export default function PopRankPage(){
    const { accessToken }= useAcessTokenContext();
    const { getAcessToken }= AuthAcessToken();

    useEffect(() => {
        if(!accessToken) {
            console.log("entrou aqui 1")
            //se não houver accessToken, caso o usuario acesse diretamente a
            //rota dessa page, aqui solicitamos um para poder resgatar os dados
            getAcessToken();
        }
    }, [accessToken]);

    return(
       <GeneroRankScrenn/>
    )
}