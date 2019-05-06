import {getManager} from "typeorm";
import {injectable} from "inversify";

@injectable()
export default class TypeRepository {
  public repository(T: any): any {
    return getManager().getRepository(T);
  }
}
