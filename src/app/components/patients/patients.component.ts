import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatTableFilter} from "mat-table-filter";
import {Patient} from "../../objects/interfaces/IPatient";
import {FormConfig, FormItemConfig} from "../../objects/form.config";
import {IPerson, Person} from "../../objects/interfaces/IPerson";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  public patients: Patient[] =
    [
      {
        id: '61238',
        person:
          {
            identificationNumber: '996655/4433',
            firstname: 'Linda',
            lastname: 'Blahova',
            sex: 1,
            dateOfBirth: '12.10.1998',
            identificationCard: 'AB123456',
            street: 'Zapad 1141',
            city: 'Trstena',
            state: 'Slovensko',
            nationality: 'slovenska',
            email: 'lb@gmail.com',
            telephoneNumber: '0944 444 666',
            contactFirstname: 'Maria',
            contactLastname: 'Blahova',
            contactEmail: 'mb@gmail.com',
            contactTelephone: '0944 666 555'
          },
        insuranceCompany: 2250,
        insuranceNumber: 2250456984
      },
      {
        id: '965473',
        person:
          {
            identificationNumber: '556677/4433',
            firstname: 'Maria',
            lastname: 'Blahova',
            sex: 1,
            dateOfBirth: '2.5.1969',
            identificationCard: 'XY654322',
            street: 'Zapad 1141',
            city: 'Trstena',
            state: 'Slovensko',
            nationality: 'slovenska',
            email: 'mb@gmail.com',
            telephoneNumber: '0944 666 555',
            contactFirstname: 'Maria',
            contactLastname: 'Blahova',
            contactEmail: 'lb@gmail.com',
            contactTelephone: '0944 444 444'
          },
        insuranceCompany: 2250,
        insuranceNumber: 2250852147
      },
    ];

  displayedCols: string[] = ['id', 'firstname', 'lastname', 'identificationNumber', 'detail'];
  dataSource = new MatTableDataSource(this.patients);
  person: Person = new Person();
  filterEntity: Patient = new Patient(this.person);
  filterType: MatTableFilter = MatTableFilter.ANYWHERE;
  public config?: FormConfig;

  constructor() {
  }

  ngOnInit(): void {
    this.setConfig();

  }

  public setConfig() {

    const formCnfg: FormConfig = {
      sections: [
        {
          name: "Filtrovanie hospitalizácií",
          items: [
            {
              id: 'id',
              label: 'ID Pacienta',
              type: 'text',
              class: '',
              value: '',
              required: false
            },
            {
              id: 'firstname',
              label: 'Meno',
              type: 'text',
              class: '',
              value: '',
              required: false
            },
            {
              id: 'lastname',
              label: 'Priezvisko',
              type: 'text',
              class: '',
              value: '',
              required: false
            },
            {
              id: 'identificationNumber',
              label: 'RČ Pacienta',
              type: 'text',
              class: '',
              value: '',
              required: false
            },
          ]
        }
      ]
    }

    this.config = formCnfg;
  }

  filterTable(item: FormItemConfig) {

    switch (item.id) {
      case 'id':
        this.filterEntity.id = item.value;
        break;
      case 'identificationNumber':
        this.filterEntity.person.identificationNumber = item.value;
        break;
      case 'firstname':
        this.filterEntity.person.firstname = item.value;
        break;
      case 'lastname':
        this.filterEntity.person.lastname = item.value;
        break;
    }
  }

}
