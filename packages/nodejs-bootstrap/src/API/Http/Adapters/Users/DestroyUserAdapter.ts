import DestroyUserCommand from "../../../../Application/Commands/Users/DestroyUserCommand";
import {Request} from "express";
import {injectable} from "inversify";
import ValidationException from "../../../../Application/Exceptions/ValidationException";

@injectable()
export default class DestroyUserAdapter {
  public from(request: Request): DestroyUserCommand {
    const userId = request.params.id;

    if (! userId || undefined === userId) {
      throw new ValidationException('User id are required');
    }

    if (userId < 1) {
      throw new ValidationException('User id is not valid');
    }

    return new DestroyUserCommand(userId);
  }
}
