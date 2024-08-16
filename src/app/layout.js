import { Inter } from "next/font/google";
import "./globals.css";
import { AcessTokenProvider } from "@/context/accessTokenContext";
import { DadosProvider } from "@/context/dadosContext";

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
            {children}
          </body>
        
        </html>
 
      </DadosProvider>     
    </AcessTokenProvider>
  );
}
