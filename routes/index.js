const express = require('express')
const router = express.Router()
const validate = require('express-validation')
const userValidation = require('../app/Validation/User')
const User = require('../app/Models/User')

router.get('/login', (request, response) => {
    response.send('Birds home page')
})

router.post('/register', validate(userValidation), (request, response) => {

    const user = new User(request.body);

    user.save((err => console.log(err)))

    return response.json(request.body);
})

module.exports = router
