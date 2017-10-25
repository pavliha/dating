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

router.get('/users', async (request, response, next) => {
    return response.json(await User.find({}));
})

router.get('/user/:id', async (request, response, next) => {
    try {
        const user = await User.findById(request.param('id'))
        return response.json(user);
    } catch (err) {
        console.log(err)
    }

})
router.put('/user/:id', validate(userValidation), async (request, response, next) => {
    const user = await User.findById(request.param('id'))
    user.name = request.body.name;
    user.save()
    return response.json(user)
})


router.post('/register', validate(userValidation), (request, response) => {
    const user = new User(request.body);

    user.save((err, data) => console.log(err, data))

    return response.json(request.body);
})

module.exports = router
