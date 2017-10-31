const express = require('express')
const router = express.Router()
const validate = require('express-validation')
const userValidation = require('../app/Validation/User')
const User = require('../app/Models/User')


router.get('/users', async (request, response, next) => {
    return response.json(await User.find({}))
})


router.get('/user/:id', async (request, response, next) => {
    try {
        const user = await User.findById(request.param('id'))
        return response.json(user)
    } catch (err) {
        console.log(err)
    }
})

router.put('/user/:id', async (request, response, next) => {
    const user = await User.findById(request.param('id'))
    user.name = request.body.name;
    user.save()
    return response.json(user)
})

router.delete('/user/:id', async (request, response, next) => {
    try {
        const user = await User.findByIdAndRemove(request.param('id'))
        return response.send('User was deleted')
    } catch (err) {
        console.log(err)
    }

})


module.exports = router
