import IUserRepository from "../../../Domain/Interfaces/IUserRepository";
import {inject, injectable} from "inversify";
import {TYPES} from "../../../Infrastructure/DI/types";
import ShowUsersCommand from "../../Commands/Users/ShowUsersCommand";
import User from "../../../Domain/Entities/User";
import EntityNotFoundException from "../../Exceptions/EntityNotFoundException";

@injectable()
export default class ShowUserHandler {
  private userRepository: IUserRepository;

  constructor(@inject(TYPES.IUserRepository) userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public async execute(command: ShowUsersCommand): Promise<User> {
    const user = await this.userRepository.findOneById(command.getId());

    if (!user) {
      throw new EntityNotFoundException(`User with id: ${command.getId()} not found`);
    }

    return user;
  }
}
