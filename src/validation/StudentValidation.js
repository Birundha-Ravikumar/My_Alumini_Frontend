import Joi from 'joi';

export const StudentSchema = Joi.object().keys({
  _id: Joi.string(),
  Id: Joi.string(),
  rollNumber: Joi.string().required(),
  registerNumber: Joi.number().required(),
  name: Joi.string().required(),
  startingYear: Joi.number().required(),
  endingYear: Joi.number().required(),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  mobileNumber: Joi.number().required(),
  degree: Joi.string().required(),
  department: Joi.string().required(),
  password: Joi.string().required(),
})
