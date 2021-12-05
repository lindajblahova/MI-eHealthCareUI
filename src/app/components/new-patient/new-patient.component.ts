import { Component, OnInit } from '@angular/core';
import {FormConfig, FormItemConfig} from "../../objects/form.config";

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.scss'],
})
export class NewPatientComponent implements OnInit {

  public config?: FormConfig;

  constructor() { }

  ngOnInit(): void {
    this.setConfig();
  }

  public setConfig() {

    const formCnfg: FormConfig = {
      sections: [
        {
         name: "Osobné údaje",
          items: [
            {
              id: 'meno',
              label: 'Meno',
              type: 'text',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'priezvisko',
              label: 'Priezvisko',
              type: 'text',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'rodnePriezvisko',
              label: 'Rodné Priezvisko',
              type: 'text',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'pohlavie',
              label: 'Pohlavie',
              type: 'select',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'rodinnyStav',
              label: 'Rodinný Stav',
              type: 'text',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'rodneCislo',
              label: 'Rodné číslo',
              type: 'text',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'datumNarodenia',
              label: 'Dátum narodenia',
              type: 'datepicker',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'dokladTotoznosti',
              label: 'Doklad Totožnosti',
              type: 'text',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'statnaPrislusnost',
              label: 'Štátna príslušnosť',
              type: 'text',
              class: '',
              value: '',
              required: true
            }
          ]
        },
        {
          name: "Zdravotné informácie",
          items: [
            {
              id: 'kodPoistovne',
              label: 'Kód Poisťovne',
              type: 'number',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'cisloPoistenia',
              label: 'Číslo Poistenia',
              type: 'number',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'krvnaSkupina',
              label: 'Krvná skupina',
              type: 'number',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'vyska',
              label: 'Výška [cm]',
              type: 'number',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'hmotnost',
              label: 'Hmotnosť [kg]',
              type: 'number',
              class: '',
              value: '',
              required: true
            }
          ]
        },
        {
          name: "Adresa",
          items: [
            {
              id: 'ulica',
              label: 'Ulica a číslo',
              type: 'text',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'mesto',
              label: 'Mesto',
              type: 'text',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'psc',
              label: 'PSČ',
              type: 'number',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'stat',
              label: 'Štát',
              type: 'text',
              class: '',
              value: '',
              required: true
            },

          ]
        },
        {
          name: "Kontakt",
          items: [
            {
              id: 'telefonneCíslo',
              label: 'Telefónne číslo',
              type: 'text',
              class: '',
              value: '',
              required: false
            },
            {
              id: 'email',
              label: 'Email',
              type: 'text',
              class: '',
              value: '',
              required: false
            }
          ]
        },
        {
          name: "Kontaktná osoba",
          items: [
            {
              id: 'kontaktMeno',
              label: 'Kontaktná osoba - Meno',
              type: 'text',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'kontaktPriezvisko',
              label: 'Kontaktná osoba - Priezvisko',
              type: 'text',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'kontaktTelefon',
              label: 'Kontaktná osoba - Telefónne číslo',
              type: 'text',
              class: '',
              value: '',
              required: false
            },
            {
              id: 'kontaktEmail',
              label: 'Kontaktná osoba - Email',
              type: 'text',
              class: '',
              value: '',
              required: false
            },
          ]
        },
      ]
    }

    this.config = formCnfg;
  }
}
