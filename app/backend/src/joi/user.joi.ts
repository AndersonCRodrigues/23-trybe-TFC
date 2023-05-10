import Joi = require('joi');

const erroIsRequired = '{{#label}} is required';

const loginSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required().label('email'),
  password: Joi.string().required().min(6).label('password'),
}).messages({
  'any.min': '{{#label}} length must be at last {#limit} characters long',
  'email.email': '{{#label}} must be a valid email',
  'any.required': erroIsRequired,
});

export default loginSchema;
