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

// Sinalizo para o express que estamos usando o JSON no body
app.use(express.json())

//Endpoint Create [POST] /personagem
app.post('/personagem', function (req,res)
{
    // Acessamos o BODY da requisição
    const body = req.body
    
    // Acessamos a propriedade 'nome' do body
    const novoItem = body.nome
    
    // Adicionamos na lista
    lista.push(novoItem)

    // Exibimos uma mensagem de sucesso
    res.send('Item adicionado com sucesso: ' + novoItem)
    
})


// Endpoint Update [PUT] /personagem/:id
app.put('/personagem/:id', function(req,res)
{
    // Acessamos o ID dos parâmetros de rota
    const id = req.params.id

    // Acessamos o Body da requisição
    const body = req.body

    // Acessamos a propriedade 'nome' do body
    const novoItem = body.nome

    // Atualizamos na lista o novoItem pelo ID - 1
    lista[id - 1] = novoItem

    // Enviamos uma mensagem de sucesso
    res.send('Item atualizado com sucesso: ' + id  + ' - ' + novoItem)
})

app.listen(3000)
