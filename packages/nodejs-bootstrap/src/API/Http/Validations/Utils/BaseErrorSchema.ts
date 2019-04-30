import { codeErrors } from './ErrorMessages';

/**
 * Utils: BaseErrorsSchema
 * Create custom errors for API Joi Validations
 * API Repository: https://github.com/hapijs/joi/blob/v14.3.1/API.md#errors
 * @author Matias Beltramone
 * @email <mgbeltramone@gmail.com>
 * @param errors
 * @param customOptions (object)
 * (CustomOptions: Additional information for custom messages,
 * if you need an example like regex patterns, you can use this)
 */
export default function customErrorMessages(errors: any, customOptions?: any) {
  errors.forEach((err: any) => {
    switch (err.type) {
      case 'any.empty':
        err.type =  codeErrors.EMPTY.code;
        err.message = codeErrors.EMPTY.message;
        break;
      case 'any.required':
        err.type =  codeErrors.REQUIRED.code;
        err.message = codeErrors.REQUIRED.message;
        break;
      case 'string.base':
        err.type = codeErrors.STRING.code;
        err.message = codeErrors.STRING.message;
        break;
      case 'string.email':
        err.type = codeErrors.STRING.ATTRIBUTES.EMAIL.code;
        err.message = codeErrors.STRING.ATTRIBUTES.EMAIL.message;
        break;
      case 'string.min':
        err.type = codeErrors.STRING.ATTRIBUTES.MIN.code;
        err.message = `${codeErrors.STRING.ATTRIBUTES.MIN.message} ${err.context.limit} characters`;
        break;
      case 'string.max':
        err.type = codeErrors.STRING.ATTRIBUTES.MAX.code;
        err.message = `${codeErrors.STRING.ATTRIBUTES.MAX.message} ${err.context.limit} characters`;
        break;
      case 'string.regex.base':
        err.type = codeErrors.STRING.ATTRIBUTES.REGEX.code;
        err.message = `${codeErrors.STRING.ATTRIBUTES.REGEX.message}. Pattern example: ${customOptions.pattern}`;
        break;
      case 'number.base':
        err.type = codeErrors.NUMBER.code;
        err.message = codeErrors.NUMBER.message;
        break;
      case 'number.positive':
        err.type = codeErrors.NUMBER.ATTRIBUTES.POSITIVE.code;
        err.message = `${codeErrors.NUMBER.ATTRIBUTES.MIN.message} ${err.context.limit}`;
        break;
      case 'number.negative':
        err.type = codeErrors.NUMBER.ATTRIBUTES.NEGATIVE.code;
        err.message = `${codeErrors.NUMBER.ATTRIBUTES.NEGATIVE.message} ${err.context.limit}`;
        break;
      case 'number.min':
        err.type = codeErrors.NUMBER.ATTRIBUTES.MIN.code;
        err.message = `${codeErrors.NUMBER.ATTRIBUTES.MIN.message} ${err.context.limit}`;
        break;
      case 'number.max':
        err.type = codeErrors.NUMBER.ATTRIBUTES.MAX.code;
        err.message = `${codeErrors.NUMBER.ATTRIBUTES.MAX.message} ${err.context.limit}`;
        break;
      case 'boolean.base':
        err.type = codeErrors.BOOLEAN.code;
        err.message = codeErrors.BOOLEAN.message;
        break;
      default:
        break;
    }
  });

  return errors;
}
