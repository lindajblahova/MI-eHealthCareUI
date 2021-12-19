import { Component, OnInit } from '@angular/core';
import {IDoctor} from "../../objects/interfaces/IDoctor";
import {DoctorService} from "../../services/doctor.service";

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  doctors: IDoctor[];

  constructor(private doctorService: DoctorService) {
    this.doctors = this.doctorService.getAllDoctors();
  }

  ngOnInit(): void {
  }


}
