import * as express from "express";
import DIContainer from '../Infrastructure/DI/di.config';

import IndexUsersAction from "../API/Http/Actions/Users/IndexUsersAction";
import ShowUsersAction from "../API/Http/Actions/Users/ShowUsersAction";
import UpdateUsersAction from "../API/Http/Actions/Users/UpdateUsersAction";
import DestroyUsersAction from "../API/Http/Actions/Users/DestroyUsersAction";
import StoreUsersAction from "../API/Http/Actions/Users/StoreUsersAction";

const router = express.Router();

router.get('/', (request, response) => {
  const indexUsersAction: IndexUsersAction = DIContainer.resolve<IndexUsersAction>(IndexUsersAction);
  indexUsersAction.execute(request, response);
});

router.post('/', (request, response) => {
  const storeUsersAction: StoreUsersAction = DIContainer.resolve<StoreUsersAction>(StoreUsersAction);
  storeUsersAction.execute(request, response);
});

router.get('/:id([0-9]+)', (request, response) => {
  const showUsersAction: ShowUsersAction = DIContainer.resolve<ShowUsersAction>(ShowUsersAction);
  showUsersAction.execute(request, response);
});

router.put('/:id([0-9]+)', (request, response) => {
  const updateUsersAction: UpdateUsersAction = DIContainer.resolve<UpdateUsersAction>(UpdateUsersAction);
  updateUsersAction.execute(request, response);
});

router.delete('/:id([0-9]+)', (request, response) => {
  const destroyUsersAction: DestroyUsersAction = DIContainer.resolve<DestroyUsersAction>(DestroyUsersAction);
  destroyUsersAction.execute(request, response);
});

export default router;
