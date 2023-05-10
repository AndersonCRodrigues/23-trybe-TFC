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

const userSchema = Joi.object({
  username: Joi.string().required().min(3).label('username'),
  password: Joi.string().required().min(8).label('password'),
  level: Joi.number().required().min(1).label('level'),
  vocation: Joi.string().required().min(3).label('vocation'),
}).messages({
  'string.empty': erroIsRequired,
  'any.required': erroIsRequired,
  'level.min': '{{#label}}  must be greater than or equal to 1',
});

export { loginSchema, userSchema };
