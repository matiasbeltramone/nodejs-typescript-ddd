import {Request, Response} from "express";
import {error} from "../../../../utils/customResponse";
import {injectable} from "inversify";
import DestroyUserAdapter from "../../Adapters/Users/DestroyUserAdapter";
import DestroyUserHandler from "../../../../Application/Handlers/Users/DestroyUserHandler";
import EntityNotFoundException from "../../../../Application/Exceptions/EntityNotFoundException";
import {HTTP_CODES} from "../../Enums/HttpStatuses";
import BadRequestException from "../../../../Application/Exceptions/BadRequestException";

@injectable()
export default class DestroyUsersAction {
  private adapter: DestroyUserAdapter;
  private handler: DestroyUserHandler;

  constructor(
    adapter: DestroyUserAdapter,
    handler: DestroyUserHandler
  ) {
    this.adapter = adapter;
    this.handler = handler;
  }

  public async execute(request: Request, response: Response) {
    try {
      const command = this.adapter.from(request);

      await this.handler.execute(command);

      return response.status(HTTP_CODES.NO_CONTENT).end();
    } catch (e) {
      if (e instanceof BadRequestException) {
        return response.status(HTTP_CODES.BAD_REQUEST).json(
          error(e.name, 'ERR-0002', e.message, 'www.example.com/errors/#ERR-0002'),
        );
      }

      if (e instanceof EntityNotFoundException) {
        return response.status(HTTP_CODES.NOT_FOUND).json(
          error(e.name, 'ERR-0003', e.message, 'www.example.com/errors/#ERR-0003'),
        );
      }

      return response.status(HTTP_CODES.ERROR).json(
        error(e.name, 'ERR-0001', e.message, 'www.example.com/errors/#ERR-0001'),
      );
    }
  }
}
