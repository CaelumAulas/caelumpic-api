const http = require('http')
const port = 3001
const ip = 'localhost'

const server = http.createServer((req, res) => {
    res.end('HOME')
})

server.listen(port, ip, () => {
  console.log(`Servidor de pé em: http://${ip}:${port}`)
  console.log('Pra derrubar o servidor: ctrl + c')
})