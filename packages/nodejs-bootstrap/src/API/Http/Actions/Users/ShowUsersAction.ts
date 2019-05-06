import {Request, Response} from "express";
import {success} from "../../../../utils/customResponse";
import ShowUserAdapter from "../../Adapters/Users/ShowUserAdapter";
import ShowUserHandler from "../../../../Application/Handlers/Users/ShowUserHandler";
import GetUserPresenter from "../../Presenters/Users/GetUserPresenter";
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

  public async execute(request: Request, response: Response): Promise<Response> {
    const command = this.adapter.from(request);

    const result = await this.handler.execute(command);

    const presenter = new GetUserPresenter(result);

    return response.status(HTTP_CODES.OK).json(
      success(presenter.getData(), 'ShowUsersAction: User has been retrieved')
    );
  }
}
