import IUserRepository from "../../../Domain/Interfaces/IUserRepository";
import {inject, injectable} from "inversify";
import {TYPES} from "../../../Infrastructure/DI/types";
import UpdateUserCommand from "../../Commands/Users/UpdateUserCommand";
import User from "../../../Domain/Entities/User";

@injectable()
export default class UpdateUserHandler {
  private userRepository: IUserRepository;

  constructor(@inject(TYPES.IUserRepository) userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public async execute(command: UpdateUserCommand): Promise<User> {
    const user = await this.userRepository.findOneById(command.getId());

    user.setName(command.getName());
    user.setSurname(command.getSurname());
    user.setAge(command.getAge());

    return await this.userRepository.persist(user);
  }
}
