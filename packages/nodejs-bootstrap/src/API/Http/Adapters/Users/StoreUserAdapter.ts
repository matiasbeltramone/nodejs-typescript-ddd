import {Request} from "express";
import {injectable} from "inversify";
import StoreUserCommand from "../../../../Application/Commands/Users/StoreUserCommand";
import Validator from "../../Validations/Utils/Validator";
import {storeUserSchema} from "../../Validations/Schemas/UserSchema";
import ValidationException from "../../../../Application/Exceptions/ValidationException";

@injectable()
export default class StoreUserAdapter {
  private validator: Validator;

  constructor() {
    this.validator = new Validator();
  }

  public from(request: Request): StoreUserCommand {
    const error = this.validator.validate(request.body, storeUserSchema);

    if (error) {
      throw new ValidationException(JSON.stringify(this.validator.validationResult(error.details)));
    }

    return new StoreUserCommand(
      request.body.name,
      request.body.surname,
      request.body.age,
    );
  }
}
