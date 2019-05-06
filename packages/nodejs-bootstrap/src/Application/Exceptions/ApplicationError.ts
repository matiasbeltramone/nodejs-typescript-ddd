export default class ApplicationError extends Error {
  constructor(name: string, message: string) {

    // Calling parent constructor of base Error class.
    super(message);

    Object.setPrototypeOf(this, new.target.prototype);

    // Saving class name in the property of our custom error as a shortcut.
    this.name = name;

    // Capturing stack trace, excluding constructor call from it.
    Error.captureStackTrace(this, this.constructor);
  }
}
