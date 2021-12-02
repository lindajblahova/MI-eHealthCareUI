import { Component, OnInit } from '@angular/core';
import {IDoctor} from "../../objects/interfaces/IDoctor";
import {FormConfig} from "../../objects/form.config";
import {ListConfig} from "../../objects/list.config";

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  doctors: IDoctor[] = [
    {
      id: '123',
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
      specialization: 123,
      title: 'MUDr.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
