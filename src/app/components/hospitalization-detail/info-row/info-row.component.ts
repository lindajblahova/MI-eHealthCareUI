import {Component, Input, OnInit} from '@angular/core';
import {IPatient} from "../../../objects/interfaces/IPatient";
import {IPerson} from "../../../objects/interfaces/IPerson";
import {MatTableDataSource} from "@angular/material/table";
import {FormConfig} from "../../../objects/form.config";

export interface PeriodicElement {
  diagnoza: string;
  lokalizacia: string;
  popis: string;
  zavaznost: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {diagnoza: 'I259', lokalizacia: '-', popis: 'Chronická ischemická choroba srdca', zavaznost: '1 - Mierna'},
  {diagnoza: 'J849', lokalizacia: '-', popis: 'Choroba interstícia pľúc', zavaznost: '0 - Nízka'},
];


@Component({
  selector: 'app-info-row',
  templateUrl: './info-row.component.html',
  styleUrls: ['./info-row.component.scss']
})
export class InfoRowComponent implements OnInit {

  @Input() editMode: boolean = false;
  displayedColumns: string[] = ['diagnoza', 'lokalizacia', 'popis', 'zavaznost'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  public patient: IPatient =
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
    };

  public config?: FormConfig;
  constructor() { }

  ngOnInit(): void {
    this.setConfig();

  }

  public setConfig() {
    const formCnfg: FormConfig = {
      sections: [
        {
          name: "",
          items: [
            {
              id: 'diagnoza',
              label: 'Diagnóza',
              type: 'text',
              class: '',
              value: '',
              required: false
            },
            {
              id: 'lokalizacia',
              label: 'Lokalizácia',
              type: 'text',
              class: '',
              value: '',
              required: false
            },
            {
              id: 'popis',
              label: 'Popis',
              type: 'text',
              class: '',
              value: '',
              required: false
            },
            {
              id: 'zavaznost',
              label: 'Závažnosť',
              type: 'text',
              class: '',
              value: '',
              required: false
            }
          ]
        }
      ]
    }

    this.config = formCnfg;
  }

}
