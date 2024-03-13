import Joi from 'joi';

const createStaffSchema = Joi.object({
  Name: Joi.string().required(),
  Password: Joi.string().required(),
  Rg: Joi.string().optional(),
  Cpf: Joi.string().optional(),
  BirthDate: Joi.string().optional(),
  Address: Joi.string().optional(),
  Role: Joi.string().optional(),
  Period: Joi.string().optional(),
  WorkDays: Joi.string().optional(),
  Email: Joi.string().email().required(),
  Phone: Joi.string().regex(/^[0-9]{10}$/).messages({'string.pattern.base': `Phone number must have 10 digits.`}).optional()
}).unknown(false);

export default createStaffSchema
