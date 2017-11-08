const express = require('express')
const router = express.Router()
const validate = require('express-validation')
const loginValidation = require('../app/Validation/Login')
const User = require('../app/Models/User')
const ConfigJwt = require('../config/jwt')
const jwt = require("jwt-simple");

router.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = User.findOne({email, password})
    debugger
    if (user) {
        const token = jwt.encode({id: user._id}, ConfigJwt.jwtSecret);
        return res.json({token});
    } else {
        return res.sendStatus(401).json({msg:"email or password is not valid"});
    }
});


router.post('/register', validate(loginValidation), (request, response) => {
    const user = new User(request.body);

    user.save((err, data) => console.log(err, data))

    return response.json(request.body);
})



module.exports = router
