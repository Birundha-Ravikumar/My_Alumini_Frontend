import Joi from 'joi';

export const JobSchema = Joi.object().keys({
  _id: Joi.string(),
  jobID: Joi.number().required(),
  title: Joi.string().required(),
  discription: Joi.string().required(),
  email: Joi.string().required().email({ tlds: { allow: false } }),
  contactNumber: Joi.number().required(),
  website: Joi.string().required(),
  position: Joi.string().required(),
})