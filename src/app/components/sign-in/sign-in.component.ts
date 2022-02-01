import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  password: string;
  username: string;
  hintShow: boolean = false;

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  navigateTo(): void {

    console.log(this.username);
    console.log(this.password);
    this.authService.logIn(this.username, this.password);

    if (this.authService.isLogged())
    {
      this.router.navigate(['/patients']);
      this.hintShow = false;
    }
    else
    {
      this.hintShow = true;
    }

  }

}
