import * as Joi from 'joi';
import * as customErrorMessages from '../Utils/BaseErrorSchema';

export const storeUserSchema = {
  name: Joi.string()
    .min(3)
    .max(100)
    .required()
    .error((errors) => {
      return customErrorMessages.default(errors);
    }),
  surname: Joi.string()
    .min(3)
    .max(100)
    .required()
    .error((errors) => {
      return customErrorMessages.default(errors);
    }),
  age: Joi.number()
    .required()
    .error((errors) => {
      return customErrorMessages.default(errors);
    }),
};

export const updateUserSchema = {
  name: Joi.string()
    .min(3)
    .max(100)
    .error((errors) => {
      return customErrorMessages.default(errors);
    }),
  surname: Joi.string()
    .min(3)
    .max(100)
    .error((errors) => {
      return customErrorMessages.default(errors);
    }),
  age: Joi.number()
    .error((errors) => {
      return customErrorMessages.default(errors);
    }),
};
