import {Request, Response} from "express";
import {error, success} from "../../../../utils/customResponse";

export default class DestroyUsersAction {
  public async execute(request: Request, response: Response) {
    try {
      const users = {};

      return response.status(200).json(success(users, 'User list retrieve', 200));
    } catch (e) {
      return response.status(500).json(
        error(e.message, 'Error occurred on: Try to retrieve list of roles', 500),
      );
    }
  }
}
