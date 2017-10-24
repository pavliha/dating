const mongoose = require('../../bootstrap/mongoose');

const UserSchema = mongoose.Schema({
    my_gender: String,
    looking_for_gender: String,
    age: String,
    name: String,
    password: String,
    education: String,
    region: String,
    terms: Boolean,
    email: String,
    day: Date,
    month: Date,
    year: Date,
    children: Boolean,
    place: String
})

module.exports = UserSchema