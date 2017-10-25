const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({
    dev,
    dir: './resources'
})
const handle = app.getRequestHandler()

module.exports = new Promise((resolve, reject) => {
    app.prepare()
        .then(() => resolve(handle))
        .catch(err => reject(err))
})