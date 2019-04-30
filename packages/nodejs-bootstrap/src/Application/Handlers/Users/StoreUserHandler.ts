import IUserRepository from "../../../Domain/Interfaces/IUserRepository";
import {inject, injectable} from "inversify";
import {TYPES} from "../../../Infrastructure/DI/types";
import StoreUserCommand from "../../Commands/Users/StoreUserCommand";
import User from "../../../Domain/Entities/User";

@injectable()
export default class StoreUserHandler {
  private userRepository: IUserRepository;

  constructor(@inject(TYPES.IUserRepository) userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public async execute(command: StoreUserCommand): Promise<User> {
    const user = new User(
      command.getName(),
      command.getSurname(),
      command.getAge()
    );

    return await this.userRepository.persist(user);
  }
}
