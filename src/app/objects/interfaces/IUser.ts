import {IDoctor} from "./IDoctor";

export interface IUser {
  doctor: IDoctor;
  password: string;
}
