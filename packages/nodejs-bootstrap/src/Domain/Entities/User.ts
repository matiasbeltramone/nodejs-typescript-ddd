export default class User {
  private name: string;
  private surname: string;
  private age: number;

  constructor(name: string, surname: string, age: number) {
    this.name = name;
    this.surname = surname;
    this.age = age;
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
