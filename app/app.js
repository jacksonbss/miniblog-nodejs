let app = require('../config/server')
let port = config.server.port 
let host = config.server.host

app.listen(port, host, () => {
    console.log(`Sevidor rodando na porta ${port} - ${host}!`)
})
