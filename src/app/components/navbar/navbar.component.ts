import {Component, OnInit} from '@angular/core';
import {MenuConfig, MenuItemConfig} from "../../objects/menu.config";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public config?: MenuConfig;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.setConfig();
  }

  public setConfig() {

    const menuCnfg: MenuConfig = {
      items: [
        {
          title: 'Profil',
          icon: 'fa fa-user ',
          path: '/profile'
        },
        {
          title: 'Lekári',
          icon: 'fa fa-user-md ',
          path: '/doctors',
        },
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
          ]
        },
        {
          title: 'Hospitalizácie',
          icon: 'fa fa-h-square',
          path: '/my-hospitalizations',
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
          path: 'ambulance',
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
  }

}
