const express = require("express")
const router = express.Router()


const app = express()
const porta = 3333

function mostraMulher(request, response){
    response.json({
        nome: "Daniele Cabral de Souza",
        imagem: 'https://avatars.githubusercontent.com/u/108541944?v=4',
        minibios: 'Sou operadora de call center, e futura DEV'
    })
}

function mostraPorta() {
console.log('Servidor criado e rodando na porta ', porta)
}


app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)