import Joi from 'joi';

const updateStaffSchema = Joi.object({
  Name: Joi.string().required()
}).unknown(false);

export default updateStaffSchema
