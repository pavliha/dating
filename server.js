const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: './resources' })
const handle = app.getRequestHandler()
const routes = require('./routes')

app.prepare()
    .then(() => {
        const server = express()

        server.use(bodyParser.urlencoded({extended: false}))
        server.use(express.json())

        server.use('/', routes);

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(port, (err) => {
            if (err) throw err
            console.log(`> Ready on http://localhost:${port}`)
        })
    })