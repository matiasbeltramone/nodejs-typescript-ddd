import ApplicationError from "./ApplicationError";

export default class ValidationException extends ApplicationError {
  constructor(message: string) {
    super(ValidationException.name, message);

    Object.setPrototypeOf(this, new.target.prototype);
  }
}
