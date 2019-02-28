let express = require('express')
let app = express()
let port = 3000

//Servidor
app.listen(port, () => {
    console.log(`Sevidor rodando na porta ${port}!`)
})