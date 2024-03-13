import Joi from 'joi';

const createUserSchema = Joi.object({
  Name: Joi.string().required(),
  Cpf: Joi.string().optional(),
  Email: Joi.string().email().required(),
  Phone: Joi.string().regex(/^[0-9]{10}$/).messages({'string.pattern.base': `Phone number must have 10 digits.`}).optional()
}).unknown(false);

export default createUserSchema
