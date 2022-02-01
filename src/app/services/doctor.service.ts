import { Injectable } from '@angular/core';
import {IDoctor} from "../objects/interfaces/IDoctor";

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  doctors: IDoctor[] = [
    {
      id: '123321',
      person:
        {
          identificationNumber: '996655/4433',
          firstname: 'Ján',
          lastname: 'Haluška',
          sex: 'mužské',
          maritalStatus: 'ženatý',
          dateOfBirth: '02. 07. 1985',
          dateOfDeath: '',
          identificationCard: 'HJ123456',
          street: 'Bernolákova 50',
          city: 'Trstená',
          zipcode: '02801',
          state: 'Slovensko',
          nationality: 'slovenská',
          email: 'jh@gmail.com',
          telephoneNumber: '0911 222 333',
          contactFirstname: 'Anna',
          contactLastname: 'Halušková',
          contactEmail: 'ah@gmail.com',
          contactTelephone: '0911 333 222'
        },
      specialization: 123,
      title: 'MUDr.'
    }
  ];

  constructor() { }

  public getAllDoctors(): IDoctor[] {
    return this.doctors;
  }

  public getDoctor(idDoctor: string): IDoctor {
    return this.doctors.find(doctor => doctor.id === idDoctor);
  }
}
