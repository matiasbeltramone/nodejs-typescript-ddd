import {Request, Response} from "express";
import {error, success} from "../../../../utils/customResponse";
import ShowUserAdapter from "../../Adapters/Users/ShowUserAdapter";
import ShowUserHandler from "../../../../Application/Handlers/Users/ShowUserHandler";
import GetUserPresenter from "../../Presenters/Users/GetUserPresenter";
import BadRequestException from "../../../../Application/Exceptions/BadRequestException";
import EntityNotFoundException from "../../../../Application/Exceptions/EntityNotFoundException";
import {injectable} from "inversify";
import {HTTP_CODES} from "../../Enums/HttpStatuses";

@injectable()
export default class ShowUsersAction {
  private adapter: ShowUserAdapter;
  private handler: ShowUserHandler;

  constructor(
    adapter: ShowUserAdapter,
    handler: ShowUserHandler
  ) {
    this.adapter = adapter;
    this.handler = handler;
  }

  public async execute(request: Request, response: Response) {
    try {
      const command = this.adapter.from(request);

      const result = await this.handler.execute(command);

      const presenter = new GetUserPresenter(result);

      return response.status(HTTP_CODES.OK).json(
        success(presenter.getData(), 'ShowUsersAction: User has been retrieved')
      );
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
