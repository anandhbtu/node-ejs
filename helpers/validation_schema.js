const Joi = require('@hapi/joi')
const validateSchema = Joi.object({
    studentName:Joi.string().required(),
    fatherName:Joi.string().required(),
    dob:Joi.string().min(10).required(),
    address:Joi.string(),
    city:Joi.string(),
    state:Joi.string(),
    pin:Joi.string().min(6).max(6).required(),
    phoneNo:Joi.string().max(10).required(),
    email:Joi.string().email().lowercase().required(),
    classs:Joi.string().required(),
    marks:Joi.string()
})
module.exports = {
    validateSchema
}