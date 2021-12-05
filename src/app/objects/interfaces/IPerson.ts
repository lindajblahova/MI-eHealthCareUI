export interface IPerson {
  firstname: string;
  lastname: string;
  sex: number;
  identificationNumber: string;
  dateOfBirth: string;
  identificationCard: string;
  street: string;
  city: string;
  state: string;
  nationality: string;
  email: string;
  telephoneNumber: string;
  contactFirstname: string;
  contactLastname: string;
  contactEmail: string;
  contactTelephone: string;
}

export class Person implements IPerson{
  firstname: string = '';
  lastname: string = '';
  sex: number | null = null ;
  identificationNumber: string = '';
  dateOfBirth: string = '';
  identificationCard: string = '';
  street: string = '';
  city: string = '';
  state: string = '';
  nationality: string = '';
  email: string = '';
  telephoneNumber: string = '';
  contactFirstname: string = '';
  contactLastname: string = '';
  contactEmail: string = '';
  contactTelephone: string = '';

  constructor() {
  }
}
