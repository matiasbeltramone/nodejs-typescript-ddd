import {Request, Response} from "express";
import {error, success} from "../../../../utils/customResponse";
import StoreUserAdapter from "../../Adapters/Users/StoreUserAdapter";
import StoreUserHandler from "../../../../Application/Handlers/Users/StoreUserHandler";
import StoreUserPresenter from "../../Presenters/Users/StoreUserPresenter";
import {injectable} from "inversify";
import BadRequestException from "../../../../Application/Exceptions/BadRequestException";
import {HTTP_CODES} from "../../Enums/HttpStatuses";

@injectable()
export default class StoreUsersAction {
  private adapter: StoreUserAdapter;
  private handler: StoreUserHandler;

  constructor(
    adapter: StoreUserAdapter,
    handler: StoreUserHandler
  ) {
    this.adapter = adapter;
    this.handler = handler;
  }

  public async execute(request: Request, response: Response) {
    try {
      const command = this.adapter.from(request);

      const result = await this.handler.execute(command);

      const presenter = new StoreUserPresenter(result);

      return response.status(HTTP_CODES.CREATED).json(
        success(presenter.getData(), 'StoreUsersAction: User has been created')
      );
    } catch (e) {
      if (e instanceof BadRequestException) {
        return response.status(HTTP_CODES.BAD_REQUEST).json(JSON.parse(e.message));
      }

      return response.status(HTTP_CODES.ERROR).json(
        error(e.name, 'ERR-0001', e.message, 'www.example.com/errors/#ERR-0001'),
      );
    }
  }
}
