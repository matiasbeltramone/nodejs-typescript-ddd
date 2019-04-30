import IUserRepository from "../../../Domain/Interfaces/IUserRepository";
import {inject, injectable} from "inversify";
import {TYPES} from "../../../Infrastructure/DI/types";
import DestroyUserCommand from "../../Commands/Users/DestroyUserCommand";
import EntityNotFoundException from "../../Exceptions/EntityNotFoundException";
import CannotDeleteEntity from "../../Exceptions/CannotDeleteEntity";

@injectable()
export default class DestroyUserHandler {
  private userRepository: IUserRepository;

  constructor(@inject(TYPES.IUserRepository) userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public async execute(command: DestroyUserCommand): Promise<boolean> {
    const user = await this.userRepository.findOneById(command.getId());

    if (!user) {
      throw new EntityNotFoundException(`User with id: ${command.getId()} not found`);
    }

    const userWasDestroy = await this.userRepository.destroy(user);

    if (! userWasDestroy) {
      throw new CannotDeleteEntity(`User with id: ${command.getId()} could not be deleted`)
    }

    return userWasDestroy;
  }
}
