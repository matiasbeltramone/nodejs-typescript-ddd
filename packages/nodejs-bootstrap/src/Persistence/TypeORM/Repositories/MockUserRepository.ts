import IUserRepository from "../../../Domain/Interfaces/IUserRepository";
import User from "../../../Domain/Entities/User";
import { injectable } from "inversify";

@injectable()
export default class MockUserRepository implements IUserRepository {
  public findAll(): Promise<User[]> {
    const sender = new User(
      "Matias",
      "Beltramone",
      24
    );

    const receiver = new User(
      "Matias",
      "Beltramone",
      24
    );

    return Promise.resolve([
      sender,
      receiver
    ]);
  }

  public async findOneById(id: number): Promise<User> {
    return undefined;
  }

  public async persist(user: User): Promise<User> {
    return undefined;
  }

  public async destroy(user: User): Promise<boolean> {
    return undefined;
  }
}
