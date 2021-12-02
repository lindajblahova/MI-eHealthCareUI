import {IPerson} from "./IPerson";

export interface IPatient {
  id: string;
  person: IPerson;
  insuranceCompany: number;
  insuranceNumber: number;
}
