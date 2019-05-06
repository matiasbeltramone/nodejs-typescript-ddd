import ShowUsersCommand from "../../../../Application/Commands/Users/ShowUsersCommand";
import {Request} from "express";
import {injectable} from "inversify";
import ValidationException from "../../../../Application/Exceptions/ValidationException";

@injectable()
export default class ShowUserAdapter {
  public from(request: Request): ShowUsersCommand {
    const userId = request.params.id;

    if (!userId || undefined === userId) {
      throw new ValidationException('User id are required');
    }

    if (userId < 1) {
      throw new ValidationException('User id is not valid');
    }

    return new ShowUsersCommand(userId);
  }
}
