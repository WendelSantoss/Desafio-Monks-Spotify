const express = require('express');
const { sendPostRequest } = require('./services/postService');

//ativação do express
const app = express();

//configuração para permitir requisições vindo de um ambiente local
const cors = require('cors');

//porta em qual o servidor estará rodando
const port = 4000;

app.use(cors());

app.use(express.json());

//construção da rota para chamada no front fazer o post
app.post('/api/sendPostRanks', async (req, res) => {
    console.log("chamou o post dos ranks")
    //chamada para o postService realizar tentativa do post
    try {
        const data = req.body;
        console.log("dados formatados:", data)
        const response = await sendPostRequest(data);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao enviar o POST', error: error.message });
    }
});

app.listen(port, ()=>{
    console.log("Servidor POST rodando na porta", port)
});
