import {injectable} from "inversify";
import IUserRepository from "../../../Domain/Interfaces/IUserRepository";
import User from "../../../Domain/Entities/User";

@injectable()
export default class EmptyUserRepository implements IUserRepository {
  public destroy(user: User): Promise<boolean> {
    return Promise.resolve(true);
  }

  public findAll(): Promise<User[]> {
    return Promise.resolve([]);
  }

  public findOneById(id: number): Promise<User> {
    return Promise.resolve(null);
  }

  public persist(user: User): Promise<User> {
    return Promise.resolve(null);
  }
}
