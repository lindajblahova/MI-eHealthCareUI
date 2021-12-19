import { Injectable } from '@angular/core';
import {DoctorService} from "./doctor.service";
import {IDoctor} from "../objects/interfaces/IDoctor";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  activeUser: IDoctor;
  constructor(private doctorService: DoctorService) {
    this.activeUser = this.doctorService.getAllDoctors()[0];
  }

  getActiveUser(): IDoctor {
    return this.activeUser;
  }
}
