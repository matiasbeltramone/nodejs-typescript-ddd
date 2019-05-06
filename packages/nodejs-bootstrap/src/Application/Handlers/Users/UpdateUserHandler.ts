import IUserRepository from "../../../Domain/Interfaces/IUserRepository";
import {inject, injectable} from "inversify";
import {INTERFACES} from "../../../Infrastructure/DI/interfaces.types";
import UpdateUserCommand from "../../Commands/Users/UpdateUserCommand";
import User from "../../../Domain/Entities/User";
import EntityNotFoundException from "../../Exceptions/EntityNotFoundException";

@injectable()
export default class UpdateUserHandler {
  private userRepository: IUserRepository;

  constructor(@inject(INTERFACES.IUserRepository) userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public async execute(command: UpdateUserCommand): Promise<User> {
    const user = await this.userRepository.findOneById(command.getId());

    if (! user) {
      throw new EntityNotFoundException(`User with id: ${command.getId()} not found`);
    }

    user.setName(command.getName());
    user.setSurname(command.getSurname());
    user.setAge(command.getAge());

    return await this.userRepository.persist(user);
  }
}
