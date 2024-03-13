import Joi from 'joi';

const createPetSchema = Joi.object({
  UserId: Joi.string().required(),
  Name: Joi.string().required(),
  Age: Joi.number().optional(),
  Sex: Joi.string().optional(),
  Species: Joi.string().optional(),
  Race: Joi.string().optional(),
  Size: Joi.string().optional(),
  Coat: Joi.string().optional(),
  Disability: Joi.boolean().optional(),
  Description: Joi.string().optional(),
}).unknown(false);

export default createPetSchema
