import User from "../Entities/User";

export default interface IUserRepository {
  findAll(): Promise<User[]>;
  findOneById(id: number): Promise<User>;
  persist(user: User): Promise<User>;
  destroy(user: User): Promise<boolean>;
}
