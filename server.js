const express = require('express')
const bodyParser = require('body-parser')
const port = parseInt(process.env.PORT, 10) || 3000
const routes = require('./routes')
const auth = require('./routes/auth')
// const admins = require('./routes/admin')
const next = require('./bootstrap/next')

next.then((handle) => {
        const server = express()

        server.use(bodyParser.urlencoded({extended: false}))
        server.use(express.json())

        server.use('/', routes)
        server.use('/', auth)
        // server.use('/', admins)

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(port, (err) => {
            if (err) throw err
            console.log(`> Ready on http://localhost:${port}`)
        })
    })