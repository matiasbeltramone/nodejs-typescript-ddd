import * as Joi from 'joi';

export default class Validator {
  public validate(data: any, schema: any) {
    const validationsOptions = { abortEarly: false, allowUnknown: true };

    const { error } = Joi.validate(
      data,
      schema,
      validationsOptions,
    );

    return error;
  }

  public validationResult(errors: any) {
    const usefulErrors: any = {
      errors: {},
      type: 'UnprocessableEntity',
    };

    errors.map((error: any) => {
      if (error.type === 'E0001') {
        usefulErrors.type = 'BadRequestException'
      }

      if (!usefulErrors.errors.hasOwnProperty(error.path.join('_'))) {
        usefulErrors.errors[error.path.join('_')] = {
          field: error.path.join('_'),
          type: error.type,
          message: error.message,
        };
      }
    });

    return usefulErrors;
  }
}
