const express = require('express')
const router = express.Router()
const validate = require('express-validation')
const userValidation = require('../app/Validation/User')
const User = require('../app/Models/User')

router.get('/users', (request, response, next) => {
    // response.send('Birds home page')
    User.find({}, function (err, users) {
        if (err)
            next(err);
        response.json(users);
    });
})

router.get('/user/:id', (request, response, next) => {
    User.findById(request.param('id'), (err, user) => {
        if (err)
            next(err);
        if (user === null)
            console.log('Not found')
        response.json(user);
    });
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
