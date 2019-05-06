import IUserRepository from "../../../Domain/Interfaces/IUserRepository";
import User from "../../../Domain/Entities/User";
import { injectable } from "inversify";
import TypeRepository from "./TypeRepository";

@injectable()
export default class TypeUserRepository extends TypeRepository implements IUserRepository {
  public async findAll(): Promise<User[]> {
    return await this.repository(User).find();
  }

  public async findOneById(id: number): Promise<User> {
    return await this.repository(User).findOne(id);
  }

  public async persist(user: User): Promise<User> {
    return await this.repository(User).save(user);
  }

  public async destroy(user: User): Promise<boolean> {
    const result = await this.repository(User).delete(user.getId());

    return (result && result.affected === 1);
  }
}
