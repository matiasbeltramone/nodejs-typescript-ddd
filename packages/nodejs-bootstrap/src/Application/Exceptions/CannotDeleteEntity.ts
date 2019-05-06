import ApplicationError from "./ApplicationError";

export default class CannotDeleteEntity extends ApplicationError {
  constructor(message?: string) {
    super(CannotDeleteEntity.name, message);

    Object.setPrototypeOf(this, new.target.prototype);
  }
}
