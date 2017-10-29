const passport = require("passport")
const passportJWT = require("passport-jwt")
const ExtractJwt = passportJWT.ExtractJwt
const Strategy = passportJWT.Strategy
const Config = require('../../config/jwt')
const User = require('../Models/User')
const params = {
    secretOrKey: Config.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

const strategy = new Strategy(params, async (payload, done) => {
    const user = await User.findById(payload.id)
    if (user)
        return done(null, {id: user.id})
    else
        return done(new Error("User not found"), null)
})

passport.use(strategy)

module.exports = {
    initialize() {
        return passport.initialize()
    },
    authenticate() {
        return passport.authenticate("jwt", Config.jwtSession)
    }
}