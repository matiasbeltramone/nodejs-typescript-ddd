import User from "../Entities/User";

export default interface IUserRepository {
  findAll(): Promise<User[]>;
}
