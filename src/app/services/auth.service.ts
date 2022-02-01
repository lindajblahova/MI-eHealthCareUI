import { Injectable } from '@angular/core';
import {IUser} from "../objects/interfaces/IUser";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  activeUser: IUser = null;
  isLoggedIn: boolean = false;
  constructor(private userService: UserService) {
    this.activeUser = this.userService.allUsers[0];
  }

  getActiveUser(): IUser {
    return this.activeUser;
  }

  public logIn(username: string, password: string): void {
    const result = this.userService.allUsers.filter( user => user.doctor.id == username && user.password == password);
    if (result.length > 0) {
      this.isLoggedIn = true;
      this.activeUser = (result[0]);
    }
    else {
      this.isLoggedIn = false;
      this.activeUser = null;
    }
  }

  public isLogged(): boolean {
    return this.isLoggedIn;
  }

  public logOut() {
    this.activeUser = null;
    this.isLoggedIn = false;
  }
}
