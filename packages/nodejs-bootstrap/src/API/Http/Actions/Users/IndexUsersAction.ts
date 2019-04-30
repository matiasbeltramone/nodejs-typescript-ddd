import { Request, Response } from "express";
import { error, success } from "../../../../utils/customResponse";
import IUserRepository from "../../../../Domain/Interfaces/IUserRepository";
import {inject, injectable} from "inversify";
import {INTERFACES} from "../../../../Infrastructure/DI/interfaces.types";
import GetAllUsersPresenter from "../../Presenters/Users/GetAllUsersPresenter";
import {HTTP_CODES} from "../../Enums/HttpStatuses";

@injectable()
export default class IndexUsersAction {
  private userRepository: IUserRepository;

  constructor(@inject(INTERFACES.IUserRepository) userRepository: IUserRepository) {
      this.userRepository = userRepository;
  }

  public async execute(request: Request, response: Response) {
    try {
      const users = await this.userRepository.findAll();

      const getAllPresenter = new GetAllUsersPresenter(users);

      return response.status(HTTP_CODES.OK).json(
        success(getAllPresenter.getData(), 'IndexUsersAction: Users has been retrieved')
      );
    } catch (e) {
      return response.status(HTTP_CODES.ERROR).json(
        error(e.name, 'ERR-0001', e.message, 'www.example.com/errors/#ERR-0001'),
      );
    }
  }
}
