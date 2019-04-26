import IUserRepository from "../../../Domain/Interfaces/IUserRepository";
import User from "../../../Domain/Entities/User";
import { injectable } from "inversify";
import {getManager, Repository} from "typeorm";

@injectable()
export default class MockUserRepository implements IUserRepository {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getManager().getRepository(User)
  }

  public async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }
}
