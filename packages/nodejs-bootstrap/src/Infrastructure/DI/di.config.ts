import { Container } from "inversify";
import { TYPES } from "./types";
import IUserRepository from "../../Domain/Interfaces/IUserRepository";
import MockUserRepository from "../../Persistence/TypeORM/Repositories/MockUserRepository";
import IndexUsersAction from "../../API/Http/Actions/Users/IndexUsersAction";
import StoreUsersAction from "../../API/Http/Actions/Users/StoreUsersAction";
import ShowUsersAction from "../../API/Http/Actions/Users/ShowUsersAction";
import UpdateUsersAction from "../../API/Http/Actions/Users/UpdateUsersAction";
import DestroyUsersAction from "../../API/Http/Actions/Users/DestroyUsersAction";

const DIContainer = new Container();

DIContainer.bind<IndexUsersAction>(IndexUsersAction).toSelf();
DIContainer.bind<StoreUsersAction>(StoreUsersAction).toSelf();
DIContainer.bind<ShowUsersAction>(ShowUsersAction).toSelf();
DIContainer.bind<UpdateUsersAction>(UpdateUsersAction).toSelf();
DIContainer.bind<DestroyUsersAction>(DestroyUsersAction).toSelf();

DIContainer.bind<IUserRepository>(TYPES.IUserRepository).to(MockUserRepository);

export default DIContainer;
