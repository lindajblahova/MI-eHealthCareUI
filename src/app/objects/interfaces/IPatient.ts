import {IPerson, Person} from "./IPerson";

export interface IPatient {
  id: string;
  person: Person;
  insuranceCompany: number;
  insuranceNumber: number;
}

export class Patient implements IPatient{
  id: string = '';
  person: Person | null = null;
  insuranceCompany: number| null = null;
  insuranceNumber: number | null = null;


  constructor(person: Person | null) {
    this.person = person;
  }
}

