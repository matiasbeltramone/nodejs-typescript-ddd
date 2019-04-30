import IUserRepository from "../../../Domain/Interfaces/IUserRepository";
import User from "../../../Domain/Entities/User";
import { injectable } from "inversify";
import {getManager, Repository} from "typeorm";

@injectable()
export default class TypeUserRepository implements IUserRepository {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getManager().getRepository(User)
  }

  public async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  public async findOneById(id: number): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  public async persist(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  public async destroy(user: User): Promise<boolean> {
    const result = await this.userRepository.delete(user.getId());

    return (result && result.affected === 1);
  }
}
