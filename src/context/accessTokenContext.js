'use client'
import { createContext, useContext, useState,  } from "react";

const TokenContext = createContext({});

export function AcessTokenProvider (props) {
  const [accessToken, setAccessToken]= useState("");

  return (
      <TokenContext.Provider
        value={{
          accessToken,
          setAccessToken
        }}
      >
          {props.children}
      </TokenContext.Provider>
  );
};

export const useAcessTokenContext = () => {
    return useContext(TokenContext);
};