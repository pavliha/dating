const express = require('express')
const router = express.Router()
const validate = require('express-validation')
const userValidation = require('../app/Validation/User')
const User = require('../app/Models/User')
const jwt = require('../app/Auth/jwt')

router.get('/index',(request,response)=>{
    app.render(request, response)
})

router.get('/users', jwt.authenticate(), async (request, response, next) => {
    return response.json(await User.find({}));
})


router.get('/user/:id', jwt.authenticate(), async (request, response, next) => {
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

router.delete('/user/:id', jwt.authenticate(), async (request, response, next) => {
    try {
        const user = await User.findByIdAndRemove(request.param('id'))
        return response.send('User was deleted')
    } catch (err) {
        console.log(err)
    }

})



module.exports = router
