import ShowUsersCommand from "../../../../Application/Commands/Users/ShowUsersCommand";
import {Request} from "express";
import BadRequestException from "../../../../Application/Exceptions/BadRequestException";
import {injectable} from "inversify";

@injectable()
export default class ShowUserAdapter {
  public from(request: Request): ShowUsersCommand {
    const userId = request.params.id;

    if (!userId || undefined === userId) {
      throw new BadRequestException('User id are required');
    }

    if (userId < 1) {
      throw new BadRequestException('User id is not valid');
    }

    return new ShowUsersCommand(userId);
  }
}
