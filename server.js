const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3000

const fotos = [{
  url: 'https://www.greenme.com.br/images/informar-se/animais/leao.jpg',
  titulo: 'Leao 1',
  descricao: 'Foto de leão com fundo preto'
},
{
  url: 'https://abrilveja.files.wordpress.com/2016/06/leao-7896-c-original.jpeg?quality=70&strip=info&w=620',
  titulo: 'Leao 2',
  descricao: 'Foto do leão de frente'
}]

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('HOME')
})

app.get('/v1/fotos', (req, res) => {
  res.json(fotos)
})

app.get('/v1/fotos/:id', (req, res) => {
  const id = req.params.id
  res.json(fotos[id])
})

app.post('/v1/fotos', (req, res) => {
  const foto = req.body

  console.log(foto)
  fotos.push(foto)

  res.status(200).json({msg: 'Mensagem salva com sucesso!'})
})

app.listen(port, () => {
  console.log(`Servidor de pé em: http://localhost:${port}`)
  console.log('Pra desligar o servidor: ctrl + c')
})






