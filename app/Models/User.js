const mongoose = require('../../bootstrap/mongoose');
const UserSchema = require('../../database/schemas/User')

module.exports  = mongoose.model('User', UserSchema);
