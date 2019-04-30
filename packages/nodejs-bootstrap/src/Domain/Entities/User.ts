import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn()
  public id: number;
  @Column()
  public name: string;
  @Column()
  public surname: string;
  @Column()
  public age: number;

  constructor(name: string, surname: string, age: number) {
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

  public setName(name: string): void {
    this.name = name;
  }

  public setSurname(surname: string): void {
    this.surname = surname;
  }

  public setAge(age: number): void {
    this.age = age;
  }
}
