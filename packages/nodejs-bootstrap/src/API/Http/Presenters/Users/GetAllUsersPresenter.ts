import IPresenter from "../../../../Infrastructure/Presenters/Contracts/IPresenter";
import User from "../../../../Domain/Entities/User";

export default class GetAllUsersPresenter implements IPresenter {
  private result: any;

  public constructor(result: User[]) {
    this.result = result;
  }

  public toJson(): string {
    return JSON.stringify(this.getData());
  }

  public getData(): object {
    const userResult: any[] = [];

    this.result.forEach((user: User) => {
      const { id, name, surname, age } = user;

      userResult.push({ id, name, surname, age });
    });

    return userResult;
  }
}
