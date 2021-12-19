export interface IPerson {
  firstname: string;
  lastname: string;
  birthLastname?: string;
  sex: string;
  maritalStatus: string;
  identificationNumber: string;
  dateOfBirth: string;
  dateOfDeath: string;
  identificationCard: string;
  street: string;
  city: string;
  zipcode: string;
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
  birthLastname?: string = '';
  sex: string = '';
  maritalStatus: string = '';
  identificationNumber: string = '';
  dateOfBirth: string = '';
  dateOfDeath: string = '';
  identificationCard: string = '';
  street: string = '';
  city: string = '';
  zipcode: string = '';
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
