## Monks Desafio - Back-End 🚀

Este é o back-end do Desafio da .Monks Spotify, desenvolvido em Node.js. O back-end é responsável por receber dados dos ranks de artistas e gêneros musicais, formatá-los adequadamente e enviá-los por meio de uma requisição POST para uma API externa, conforme solicitado no enunciado.

## Tecnologias Utilizadas 🛠️
- Node.js: Plataforma de desenvolvimento que permite a execução de JavaScript no lado do servidor.

- Express.js: Framework web rápido e minimalista para Node.js, utilizado para criar o servidor e gerenciar as rotas.

- Axios: Biblioteca usada para fazer requisições HTTP, tanto no back-end quanto no front-end.

- CORS: Middleware para habilitar o Cross-Origin Resource Sharing, permitindo que o servidor aceite requisições de diferentes origens (ideal para desenvolvimento local).

## Estrutura do Projeto

- O index.js: Arquivo principal que configura e inicia o servidor Express, com a rota definida para a chamada pelo Front-End.

- O postService.js: Contém a função 'sendPostRequest' que realiza a requisição POST à API externa.

## Funcionalidades
- Rota POST: O servidor possui uma rota /api/sendPostRanks que recebe os dados no formato JSON e os envia para uma API externa informada pela .Monks. A resposta da API é retornada como sucesso, caso todos os dados sejam passados corretamente, ou como erro.

## Instruções para Rodar o Projeto

- Clone o repositório:

Copie o código, abra o bash ou terminal:<br>
```
git clone https://github.com/WendelSantoss/Desafio-Monks-Spotify.git
```

- Navegue até o diretório do back-end:

Copie o código, abra o bash ou terminal:<br>
```
cd BackEnd-Spotify-POST
```

- Instale as dependências:

Copie o código, abra o bash ou terminal:<br>
```
npm install
```

- Inicie o servidor:

Copie o código, abra o bash ou terminal:<br>
```
node src/index.js
```

- O servidor estará rodando na porta 4000.

## Requisitos
- Node.js: Certifique-se de ter o Node.js instalado na sua máquina.
- Configuração do CORS: Está configurado para permitir requisições de qualquer origem, sendo útil durante o desenvolvimento local.

## Observação
Após rodar o projeto back-end, o front-end estará habilitado para realizar o POST dos dois ranks solicitados, que são o rank de artistas pop e os 5 gêneros mais comuns entre os 15 artistas selecionados. 🚀

