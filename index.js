const express = require('express')
const app = express()

app.get('/', function (req, res)
{
    res.send('Hello World!')
})

const lista = ['Java','Kotlin', 'Android']
//


// Endpoint Read All [GET] /personagem
app.get('/personagem', function(req,res)
{
    res.send(lista)
})

// Endpoint Read By ID [GET] /personagem/id
app.get('/personagem/:id', function(req,res)
{
    const id = req.params.id

    // Acessa o item na lista usando o ID - 1
    const item = lista[id - 1]
    
    // Enviamos o item como resposta
    res.send(item)
})

app.listen(3000)
