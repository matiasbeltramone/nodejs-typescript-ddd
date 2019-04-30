import IPresenter from "../../../../Infrastructure/Presenters/Contracts/IPresenter";
import User from "../../../../Domain/Entities/User";

export default class UpdateUserPresenter implements IPresenter {
  private result: any;

  public constructor(result: User) {
    this.result = result;
  }

  public toJson(): string {
    return JSON.stringify(this.getData());
  }

  public getData(): object {
    return {
      id: this.result.getId(),
      name: this.result.getName(),
      surname: this.result.getSurname(),
      age: this.result.getAge()
    };
  }
}
