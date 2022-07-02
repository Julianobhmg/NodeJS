const app = express()
const server = require('http').createServer(app)
const port = process.env.PORT || 4100 //Se a variavel de ambiente PORT não estiver com valor, usaremos a 4100
 app.listen(port, () => {
  console.log(`- APP INICIADA NA PORTA ${port} -`)
 })