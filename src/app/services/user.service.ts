import { Injectable } from '@angular/core';
import {DoctorService} from "./doctor.service";
import {IUser} from "../objects/interfaces/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users: IUser[] =
    [{
        doctor: this.doctorService.getAllDoctors()[0],
        password: "lekar1"
    }];

  constructor(private doctorService: DoctorService) {
  }

  get allUsers(): IUser[] {
    return this._users;
  }

}
