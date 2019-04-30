import { Container } from "inversify";
import { INTERFACES } from "./interfaces.types";
import IUserRepository from "../../Domain/Interfaces/IUserRepository";
import IndexUsersAction from "../../API/Http/Actions/Users/IndexUsersAction";
import StoreUsersAction from "../../API/Http/Actions/Users/StoreUsersAction";
import ShowUsersAction from "../../API/Http/Actions/Users/ShowUsersAction";
import UpdateUsersAction from "../../API/Http/Actions/Users/UpdateUsersAction";
import DestroyUsersAction from "../../API/Http/Actions/Users/DestroyUsersAction";
import TypeUserRepository from "../../Persistence/TypeORM/Repositories/TypeUserRepository";
import StoreUserAdapter from "../../API/Http/Adapters/Users/StoreUserAdapter";
import StoreUserHandler from "../../Application/Handlers/Users/StoreUserHandler";
import ShowUserAdapter from "../../API/Http/Adapters/Users/ShowUserAdapter";
import ShowUserHandler from "../../Application/Handlers/Users/ShowUserHandler";
import UpdateUserAdapter from "../../API/Http/Adapters/Users/UpdateUserAdapter";
import UpdateUserHandler from "../../Application/Handlers/Users/UpdateUserHandler";
import DestroyUserAdapter from "../../API/Http/Adapters/Users/DestroyUserAdapter";
import DestroyUserHandler from "../../Application/Handlers/Users/DestroyUserHandler";

const DIContainer = new Container();

/**
 * Controllers
 */
DIContainer.bind<IndexUsersAction>(IndexUsersAction).toSelf();
DIContainer.bind<StoreUsersAction>(StoreUsersAction).toSelf();
DIContainer.bind<ShowUsersAction>(ShowUsersAction).toSelf();
DIContainer.bind<UpdateUsersAction>(UpdateUsersAction).toSelf();
DIContainer.bind<DestroyUsersAction>(DestroyUsersAction).toSelf();

/**
 * Adapters
 */
DIContainer.bind<StoreUserAdapter>(StoreUserAdapter).toSelf();
DIContainer.bind<ShowUserAdapter>(ShowUserAdapter).toSelf();
DIContainer.bind<UpdateUserAdapter>(UpdateUserAdapter).toSelf();
DIContainer.bind<DestroyUserAdapter>(DestroyUserAdapter).toSelf();

/**
 * Handlers
 */
DIContainer.bind<StoreUserHandler>(StoreUserHandler).toSelf();
DIContainer.bind<ShowUserHandler>(ShowUserHandler).toSelf();
DIContainer.bind<UpdateUserHandler>(UpdateUserHandler).toSelf();
DIContainer.bind<DestroyUserHandler>(DestroyUserHandler).toSelf();

/**
 * Repository Interfaces
 */
DIContainer.bind<IUserRepository>(INTERFACES.IUserRepository).to(TypeUserRepository);

export default DIContainer;
