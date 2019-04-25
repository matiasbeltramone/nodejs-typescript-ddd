import IUserRepository from "../../../Domain/Interfaces/IUserRepository";
import User from "../../../Domain/Entities/User";
import { injectable } from "inversify";

@injectable()
export default class MockUserRepository implements IUserRepository {
  public findAll(): User[] {
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

    return [
      sender,
      receiver
    ];
  }
}
