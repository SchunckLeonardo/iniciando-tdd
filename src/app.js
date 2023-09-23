let express = require('express')
let app = express()

app.get('/', (req, res) => {
    res.json({success: true})
})

app.get('/user/:name', (req, res) => {
    let username = req.params.name
    res.json({cor: "vermelho"})
})

module.exports = app