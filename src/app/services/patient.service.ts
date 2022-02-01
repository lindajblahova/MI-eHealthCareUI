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
      firstname: 'Kristína',
      lastname: 'Kollárová',
      birthLastname: 'Kollárová',
      sex: 'ženské',
      maritalStatus: 'slobodná',
      dateOfBirth: '12.10.1998',
      dateOfDeath: '-',
      identificationCard: 'AB123456',
      street: 'Západ 1141',
      city: 'Trstená',
      zipcode: '02801',
      state: 'Slovensko',
      nationality: 'slovenská',
      email: 'kk@gmail.com',
      telephoneNumber: '0944 444 666',
      contactFirstname: 'Lenka',
      contactLastname: 'Kollárová',
      contactEmail: 'lk@gmail.com',
      contactTelephone: '0944 666 555'
    },
    {
      identificationNumber: '556677/7615',
      firstname: 'Zuzana',
      lastname: 'Ondrejová',
      birthLastname: 'Kováčová',
      sex: 'ženské',
      maritalStatus: 'vydatá',
      dateOfBirth: '2.5.1969',
      dateOfDeath: '-',
      identificationCard: 'XY654322',
      street: 'Západ 1141',
      city: 'Trstená',
      zipcode: '02801',
      state: 'Slovensko',
      nationality: 'slovenská',
      email: 'zo@gmail.com',
      telephoneNumber: '0944 666 555',
      contactFirstname: 'Marek',
      contactLastname: 'Ondrej',
      contactEmail: 'mo@gmail.com',
      contactTelephone: '0944 444 666'
    },
    {
      identificationNumber: '981230/4123',
      firstname: 'Tadeáš',
      lastname: 'Rybár',
      sex: 'mužské',
      maritalStatus: 'slobodný',
      dateOfBirth: '30.12.1998',
      dateOfDeath: '-',
      identificationCard: 'AE123456',
      street: 'Hraničiarov 45/9',
      city: 'Tvrdošín',
      zipcode: '02800',
      state: 'Slovensko',
      nationality: 'slovenská',
      email: 'tr@gmail.com',
      telephoneNumber: '0949 753 624',
      contactFirstname: 'Jakub',
      contactLastname: 'Rybár',
      contactEmail: 'jr@gmail.com',
      contactTelephone: '0947 520 025'
    },
    {
      identificationNumber: '830624/6589',
      firstname: 'Miroslav',
      lastname: 'Široký',
      sex: 'mužské',
      maritalStatus: 'ženatý',
      dateOfBirth: '24.6.1983',
      dateOfDeath: '-',
      identificationCard: 'EB175866',
      street: 'Jilemnického 12/21',
      city: 'Nižná nad Oravou',
      zipcode: '02513',
      state: 'Slovensko',
      nationality: 'slovenská',
      email: 'ms@gmail.com',
      telephoneNumber: '0907 325 624',
      contactFirstname: 'Alena',
      contactLastname: 'Široká',
      contactEmail: 'as@gmail.com',
      contactTelephone: '0947 741 015'
    },
    {
      identificationNumber: '871514/9536',
      firstname: 'Alena',
      lastname: 'Široká',
      birthLastname: 'Šuhajová',
      sex: 'ženské',
      maritalStatus: 'vydatá',
      dateOfBirth: '14.5.1987',
      dateOfDeath: '-',
      identificationCard: 'EG078466',
      street: 'Jilemnického 12/21',
      city: 'Nižná nad Oravou',
      zipcode: '02513',
      state: 'Slovensko',
      nationality: 'slovenská',
      email: 'as@gmail.com',
      telephoneNumber: '0947 741 015',
      contactFirstname: 'Miroslav',
      contactLastname: 'Široký',
      contactEmail: 'ms@gmail.com',
      contactTelephone: '0907 325 624'
    },
    {
      identificationNumber: '740702/8520',
      firstname: 'Daniel',
      lastname: 'Holub',
      sex: 'mužské',
      maritalStatus: 'slobodný',
      dateOfBirth: '2.7.1974',
      dateOfDeath: '-',
      identificationCard: 'VJ852158',
      street: 'Bernolákova 76/13',
      city: 'Suchá Hora',
      zipcode: '07412',
      state: 'Slovensko',
      nationality: 'slovenská',
      email: 'dh@gmail.com',
      telephoneNumber: '0905 333 410',
      contactFirstname: 'Martina',
      contactLastname: 'Holubová',
      contactEmail: 'mh@gmail.com',
      contactTelephone: '0901 555 123'
    },
    {
      identificationNumber: '651112/7536',
      firstname: 'Ivana',
      lastname: 'Čierna',
      birthLastname: 'Olosová',
      sex: 'ženské',
      maritalStatus: 'vydatá',
      dateOfBirth: '12.1.1965',
      dateOfDeath: '23.11.2021',
      identificationCard: 'CB456982',
      street: 'Hrady 76/13',
      city: 'Brezovica',
      zipcode: '02801',
      state: 'Slovensko',
      nationality: 'slovenská',
      email: 'ic@gmail.com',
      telephoneNumber: '0905 333 410',
      contactFirstname: 'Michal',
      contactLastname: 'Čierny',
      contactEmail: 'mc@gmail.com',
      contactTelephone: '0910 423 333'
    },
  ];

  private patients: Patient[] =
    [
      {
        id: '61235968',
        person: this.persons[0],
        insuranceCompany: 24,
        insuranceNumber: 2250456984,
        bloodType: '0+',
        height: '161',
        weight: '51'
      },
      {
        id: '96754873',
        person: this.persons[1],
        insuranceCompany: 24,
        insuranceNumber: 2250852147,
        bloodType: 'A-',
        height: '170',
        weight: '48'
      },
      {
        id: '73266985',
        person: this.persons[2],
        insuranceCompany: 27,
        insuranceNumber: 2250852147,
        bloodType: 'AB-',
        height: '185',
        weight: '83'
      },
      {
        id: '96528452',
        person: this.persons[3],
        insuranceCompany: 25,
        insuranceNumber: 56254874102,
        bloodType: 'B+',
        height: '178',
        weight: '71'
      },
      {
        id: '68230571',
        person: this.persons[4],
        insuranceCompany: 25,
        insuranceNumber: 56254874102,
        bloodType: 'A-',
        height: '169',
        weight: '60'
      },
      {
        id: '15896325',
        person: this.persons[5],
        insuranceCompany: 27,
        insuranceNumber: 85201682966,
        bloodType: '0-',
        height: '183',
        weight: '74'
      },
      {
        id: '85226952',
        person: this.persons[6],
        insuranceCompany: 25,
        insuranceNumber: 74258423692,
        bloodType: 'AB+',
        height: '165',
        weight: '56'
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
