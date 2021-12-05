import {Component, OnInit} from '@angular/core';
import {Patient} from "../../objects/interfaces/IPatient";

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent implements OnInit {

  public patient: Patient =
    {
      id: '61238',
      person:
        {
          identificationNumber: '996655/4433',
          firstname: 'Linda',
          lastname: 'Blahova',
          birthLastname: 'Blahova',
          sex: 1,
          maritalStatus: 'slobodna',
          dateOfBirth: '12.10.1998',
          dateOfDeath: '',
          identificationCard: 'AB123456',
          street: 'Zapad 1141',
          city: 'Trstena',
          zipcode: '02801',
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
      insuranceNumber: 2250456984,
      bloodType: 'O+',
      height: '161',
      weight: '51'
    };

  constructor() {
  }

  ngOnInit(): void {
  }

}
