import { Injectable } from '@angular/core';
import {Patient} from "../objects/interfaces/IPatient";
import {Person} from "../objects/interfaces/IPerson";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private persons: Person[] = [
    {
      identificationNumber: '996655/4433',
      firstname: 'Linda',
      lastname: 'Blahová',
      birthLastname: 'Blahová',
      sex: 'ženské',
      maritalStatus: 'slobodná',
      dateOfBirth: '12.10.1998',
      dateOfDeath: '',
      identificationCard: 'AB123456',
      street: 'Západ 1141',
      city: 'Trstená',
      zipcode: '02801',
      state: 'Slovensko',
      nationality: 'slovenská',
      email: 'lb@gmail.com',
      telephoneNumber: '0944 444 666',
      contactFirstname: 'Mária',
      contactLastname: 'Blahová',
      contactEmail: 'mb@gmail.com',
      contactTelephone: '0944 666 555'
    },
    {
      identificationNumber: '556677/4433',
      firstname: 'Mária',
      lastname: 'Blahová',
      birthLastname: 'Dedinská',
      sex: 'ženské',
      maritalStatus: 'vydatá',
      dateOfBirth: '2.5.1969',
      dateOfDeath: '',
      identificationCard: 'XY654322',
      street: 'Západ 1141',
      city: 'Trstená',
      zipcode: '02801',
      state: 'Slovensko',
      nationality: 'slovenská',
      email: 'mb@gmail.com',
      telephoneNumber: '0944 666 555',
      contactFirstname: 'Linda',
      contactLastname: 'Blahová',
      contactEmail: 'lb@gmail.com',
      contactTelephone: '0944 444 666'
    },
  ];

  private patients: Patient[] =
    [
      {
        id: '61238',
        person: this.persons[0],
        insuranceCompany: 2250,
        insuranceNumber: 2250456984,
        bloodType: '0+',
        height: '161',
        weight: '51'
      },
      {
        id: '965473',
        person: this.persons[1],
        insuranceCompany: 2250,
        insuranceNumber: 2250852147,
        bloodType: 'A-',
        height: '170',
        weight: '48'
      },
    ];

  constructor() { }

  public getAllPatients(): Patient[] {
    return this.patients;
  }

  public getPatient(idPatient: string): Patient {
    return this.patients.find(patient => patient.id === idPatient);
  }

  public savePatient(patient: Patient): void {
    this.patients.push(patient);
  }

}
