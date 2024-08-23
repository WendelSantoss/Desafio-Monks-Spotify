const axios = require('axios');

async function sendPostRequest(data){
    //url pra onde sera enviada as duas listas com os ranks solicitados
    const postUrl = "https://psel-solution-automation-cf-ubqz773kaq-uc.a.run.app?access_token=bC2lWA5c7mt1rSPR";
    
    try {
        const response = await axios.post(postUrl, data, {headers: {"Content-Type": "application/json"}});
        console.log("Resultado do POST", response)
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = { sendPostRequest };