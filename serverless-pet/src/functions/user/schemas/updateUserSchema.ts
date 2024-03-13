import Joi from 'joi';

const updateUserSchema = Joi.object({
  Name: Joi.string().optional(),
  Email: Joi.string().email().optional(),
  Password: Joi.string().optional(),
}).unknown(false);

export default updateUserSchema
