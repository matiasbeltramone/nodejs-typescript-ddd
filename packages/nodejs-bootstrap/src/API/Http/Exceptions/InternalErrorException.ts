import {codeErrors} from "../Validations/Utils/ErrorMessages";
import BaseHttpException from "./BaseHttpException";

export default class InternalErrorException extends BaseHttpException {
  constructor(message: string, status: number, type: string, href: string) {
    // Calling parent constructor of base Error class.
    super(InternalErrorException.name, message, status, type, href);

    // Capturing stack trace, excluding constructor call from it.
    Error.captureStackTrace(this, this.constructor);

    // You can use any additional properties you want.
    // I'm going to use preferred HTTP status for this error types.
    // `500` is the default value if not specified.
    this.status = status || 500;
    this.type = type || codeErrors.HTTP.INTERNAL_ERROR.code;
    this.href = href || codeErrors.HTTP.INTERNAL_ERROR.href;
  }
}
