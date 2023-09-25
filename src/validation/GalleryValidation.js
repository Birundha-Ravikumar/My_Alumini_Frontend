import Joi from 'joi';

export const GallerySchema = Joi.object().keys({
    _id: Joi.string(),
    title: Joi.string().required(),
    description: Joi.string().required(),
  })