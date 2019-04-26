import {EntitySchema} from "typeorm";
import User from "../../../Domain/Entities/User";

export const UserEntity = new EntitySchema<User>({
  name: "users",
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true
    },
    name: {
      type: String,
      length: 100,
      nullable: false
    },
    surname: {
      type: String,
      length: 100,
      nullable: false
    },
    age: {
      type: Number
    }
  }
});
