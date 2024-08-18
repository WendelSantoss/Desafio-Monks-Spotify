import { Inter } from "next/font/google";

import "./globals.css";
import Header from "@/components/header";

import { AcessTokenProvider } from "@/context/accessTokenContext";
import { DadosProvider } from "@/context/dadosContext";
import Footer from "@/components/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Desafio Monks",
  description: "Desafio Monks",
};

export default function RootLayout({ children }) {
  return (
    <AcessTokenProvider>
      <DadosProvider>

        <html lang="en">
          <body className={inter.className}>
            <Header/>
            {children}
            <Footer/>
          </body>
        
        </html>
 
      </DadosProvider>     
    </AcessTokenProvider>
  );
}
