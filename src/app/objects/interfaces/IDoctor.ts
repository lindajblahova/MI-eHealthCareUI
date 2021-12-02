import {IPerson} from "./IPerson";

export interface IDoctor {
  id: string;
  person: IPerson;
  title: string;
  specialization: number;
}
