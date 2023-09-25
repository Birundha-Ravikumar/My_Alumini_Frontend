import Joi from 'joi'

export const EventSchema = Joi.object().keys({
    _id: Joi.string(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    venue: Joi.string().required(),
    time: Joi.string().required(),
    eventDate: Joi.string().required(),
  })