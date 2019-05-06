import * as express from "express";
import DIContainer from '../Infrastructure/DI/di.config';

import IndexUsersAction from "../API/Http/Actions/Users/IndexUsersAction";
import ShowUsersAction from "../API/Http/Actions/Users/ShowUsersAction";
import UpdateUsersAction from "../API/Http/Actions/Users/UpdateUsersAction";
import DestroyUsersAction from "../API/Http/Actions/Users/DestroyUsersAction";
import StoreUsersAction from "../API/Http/Actions/Users/StoreUsersAction";
import {asyncMiddleware} from "../API/Http/Middleware/AsyncMiddleware";

const router = express.Router();

router.get('/', asyncMiddleware(async (request: express.Request, response: express.Response) => {
  const indexUsersAction: IndexUsersAction = DIContainer.resolve<IndexUsersAction>(IndexUsersAction);
  await indexUsersAction.execute(request, response);
}));

router.post('/', asyncMiddleware(async (request: express.Request, response: express.Response) => {
  const storeUsersAction: StoreUsersAction = DIContainer.resolve<StoreUsersAction>(StoreUsersAction);
  await storeUsersAction.execute(request, response);
}));

router.get('/:id([0-9]+)', asyncMiddleware(async (request: express.Request, response: express.Response) => {
  const showUsersAction: ShowUsersAction = DIContainer.resolve<ShowUsersAction>(ShowUsersAction);
  await showUsersAction.execute(request, response);
}));

router.put('/:id([0-9]+)', asyncMiddleware(async (request: express.Request, response: express.Response) => {
  const updateUsersAction: UpdateUsersAction = DIContainer.resolve<UpdateUsersAction>(UpdateUsersAction);
  await updateUsersAction.execute(request, response);
}));

router.delete('/:id([0-9]+)', asyncMiddleware(async (request: express.Request, response: express.Response) => {
  const destroyUsersAction: DestroyUsersAction = DIContainer.resolve<DestroyUsersAction>(DestroyUsersAction);
  await destroyUsersAction.execute(request, response);
}));

export default router;
