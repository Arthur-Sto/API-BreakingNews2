const express = require('express') //chama tudo d dentro do pacote express
const app = express() //executando o pacote express e colocando dentro da constante app

// get = metodo http de pegar a resposta de um usuario.
//quando o usuario acessa a rota /, executa a função de call back(função executada por tras de outra função, no caso, a get)
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(3000) //digo que o app esta sendo ouvido na porta 3000 