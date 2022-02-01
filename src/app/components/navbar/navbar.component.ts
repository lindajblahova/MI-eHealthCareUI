import {Component, OnInit} from '@angular/core';
import {MenuConfig, MenuItemConfig} from "../../objects/menu.config";
import {Router} from "@angular/router";
import {DoctorService} from "../../services/doctor.service";
import {IDoctor} from "../../objects/interfaces/IDoctor";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public config?: MenuConfig;

  constructor(private router: Router, public authService: AuthService) {

  }

  ngOnInit(): void {
    this.setConfig();
  }

  public setConfig() {

    const menuCnfg: MenuConfig = {
      items: [
        {
          title: 'Pacienti',
          icon: 'fa fa-wheelchair',
          path: '/patients',
          subItems: [
            {
              title: 'Nový pacient',
              icon: 'fa fa-plus',
              path: '/add'
            }
          ],
          active: true
        },
        {
          title: 'Hospitalizácie',
          icon: 'fa fa-h-square',
          path: '/hospitalizations',
          subItems: [
            {
              title: 'Nová hospitalizácia',
              icon: 'fa fa-plus',
              path: '/add'
            }
          ]
        },
        {
          title: 'Izby',
          icon: 'fa fa-bed',
          path: '/rooms',
        },
        {
          title: 'Odhlásiť sa',
          icon: 'fa fa-sign-out ',
          path: 'sign-in'
        }
      ],
    }

    this.config = menuCnfg;
  }

  public navigateTo(menuItem: MenuItemConfig) {
    this.router.navigate([menuItem.path]);
  }

  public setOpenItem(menuItem: MenuItemConfig) {
    this.config?.items.forEach((value) => {
      value.open = value == menuItem;
    });
  }

  public setActiveItem(menuItem: MenuItemConfig)
  {
    this.config?.items.forEach((value) => {
      value.subItems?.forEach((subItem) => {
        subItem.active = subItem == menuItem;
      });
      value.active = value == menuItem;
      });
  }

  logOut() {
    this.authService.logOut();
    this.router.navigate(['/sign-in']);
  }

}
