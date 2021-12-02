import {Component, Input, OnInit} from '@angular/core';
import {IPatient} from "../../../objects/interfaces/IPatient";
import {IPerson} from "../../../objects/interfaces/IPerson";

@Component({
  selector: 'app-info-row',
  templateUrl: './info-row.component.html',
  styleUrls: ['./info-row.component.scss']
})
export class InfoRowComponent implements OnInit {

  @Input() editMode: boolean = false;

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

  constructor() { }

  ngOnInit(): void {
  }

}
