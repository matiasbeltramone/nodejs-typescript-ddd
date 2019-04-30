export default class BadRequestException extends Error {
  constructor(message?: string) {
    super(message);

    Object.setPrototypeOf(this, new.target.prototype);
    this.name = BadRequestException.name;
  }
}
