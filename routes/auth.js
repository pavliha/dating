const express = require('express')
const router = express.Router()
const validate = require('express-validation')
const userValidation = require('../app/Validation/User')
const User = require('../app/Models/User')


router.post('/login', async (request, response) => {
    const userData = request.body

    const user = await User.findOne({name: userData.name, password: userData.password})

    return response.json(user)
})

router.post('/register', validate(userValidation), (request, response) => {
    const user = new User(request.body);

    user.save((err, data) => console.log(err, data))

    return response.json(request.body);
})

router.get('/token')



module.exports = router
