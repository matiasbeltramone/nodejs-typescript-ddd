import IPresenter from "../../../../Infrastructure/Presenters/Contracts/IPresenter";
import User from "../../../../Domain/Entities/User";

export default class GetUserPresenter implements IPresenter {
  private result: User;

  public constructor(result: User) {
    this.result = result;
  }

  public toJson(): string {
    return JSON.stringify(this.getData());
  }

  public getData(): object {
    return {
      name: this.result.getName(),
      surname: this.result.getSurname(),
      age: this.result.getAge()
    };
  }
}
