const Joi = require('joi');

module.exports = {
    body: {
        my_gender: Joi.string().required(),
        looking_for_gender: Joi.string().required(),
        age: Joi.string().required(),
        name: Joi.string().required(),
        password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required(),
        education: Joi.string().required(),
        region: Joi.string().required(),
        terms:  Joi.array().items(Joi.string()).single().required(),
        email: Joi.string().email().required(),
        day: Joi.number().integer().required(),
        month: Joi.number().integer().required(),
        year: Joi.number().integer().required(),
        children: Joi.boolean().required(),
        place: Joi.string().required()
    }
};