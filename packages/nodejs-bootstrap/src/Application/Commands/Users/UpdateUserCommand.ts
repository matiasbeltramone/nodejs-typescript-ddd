export default class UpdateUserCommand {
  private id: number;
  private name: string;
  private surname: string;
  private age: number;

  constructor(id: number, name: string, surname: string, age: number) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getSurname(): string {
    return this.surname;
  }

  public getAge(): number {
    return this.age;
  }
}
