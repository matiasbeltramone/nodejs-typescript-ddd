import { Request, Response } from "express";
import { error, success } from "../../../../utils/customResponse";
import IUserRepository from "../../../../Domain/Interfaces/IUserRepository";
import {inject, injectable} from "inversify";
import {TYPES} from "../../../../Infrastructure/DI/types";

@injectable()
export default class IndexUsersAction {
  private userRepository: IUserRepository;

  constructor(@inject(TYPES.IUserRepository) userRepository: IUserRepository) {
      this.userRepository = userRepository;
  }

  public async execute(request: Request, response: Response) {
    try {
      const users = await this.userRepository.findAll();

      return response.status(200).json(success(users, 'User list retrieve', 200));
    } catch (e) {
      return response.status(500).json(
        error(e.message, 'Error occurred on: Try to retrieve list of roles', 500),
      );
    }
  }
}
