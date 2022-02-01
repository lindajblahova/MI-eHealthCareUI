import {Component, OnInit} from '@angular/core';
import {FormConfig, FormItemConfig} from "../../objects/form.config";
import {PatientService} from "../../services/patient.service";
import {Patient} from "../../objects/interfaces/IPatient";
import {Person} from "../../objects/interfaces/IPerson";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.scss'],
})
export class NewPatientComponent implements OnInit {

  public config?: FormConfig;

  constructor(private patientService: PatientService, private router: Router) {
  }

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
              id: 'firstname',
              label: 'Meno',
              type: 'text',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'lastname',
              label: 'Priezvisko',
              type: 'text',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'sex',
              label: 'Pohlavie',
              type: 'select',
              class: '',
              value: '',
              required: true,
              options: ['mužské','ženské','neuvedené'],
              willDisable: ['birthLastname']
            },
            {
              id: 'birthLastname',
              label: 'Rodné Priezvisko',
              type: 'text',
              class: '',
              value: '',
              required: true,
              disabled: false
            },
            {
              id: 'maritalStatus',
              label: 'Rodinný Stav',
              type: 'text',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'identificationNumber',
              label: 'Rodné číslo',
              type: 'text',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'dateOfBirth',
              label: 'Dátum narodenia',
              type: 'datepicker',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'identificationCard',
              label: 'Doklad Totožnosti',
              type: 'text',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'nationality',
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
              id: 'insuranceCompany',
              label: 'Kód Poisťovne',
              type: 'number',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'insuranceNumber',
              label: 'Číslo Poistenia',
              type: 'number',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'bloodType',
              label: 'Krvná skupina',
              type: 'select',
              class: '',
              value: '',
              required: true,
              options: ['0-','0+','A-','A+','B-','B+','AB-','AB+',]
            },
            {
              id: 'height',
              label: 'Výška [cm]',
              type: 'number',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'weight',
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
              id: 'street',
              label: 'Ulica a číslo',
              type: 'text',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'city',
              label: 'Mesto',
              type: 'text',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'zipcode',
              label: 'PSČ',
              type: 'number',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'state',
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
              id: 'telephoneNumber',
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
              id: 'contactFirstname',
              label: 'Kontaktná osoba - Meno',
              type: 'text',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'contactLastname',
              label: 'Kontaktná osoba - Priezvisko',
              type: 'text',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'contactTelephone',
              label: 'Kontaktná osoba - Telefónne číslo',
              type: 'text',
              class: '',
              value: '',
              required: false
            },
            {
              id: 'contactEmail',
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

  public loadData() {
    var arrayData: any = {};

    this.config.sections.forEach((section) => {
      section.items.forEach((item) => {
        arrayData[item.id] = item.value;
      });
    });

    var newPerson: Person = {
      firstname: arrayData['firstname'],
      lastname: arrayData['lastname'],
      birthLastname: arrayData['birthSurname'],
      sex: arrayData['sex'],
      maritalStatus: arrayData['maritalStatus'],
      identificationNumber: arrayData['identificationNumber'],
      dateOfBirth: new Date(arrayData['dateOfBirth']).toLocaleDateString(),
      dateOfDeath: '-',
      identificationCard: arrayData['identificationCard'],
      nationality: arrayData['nationality'],
      street: arrayData['street'],
      city: arrayData['city'],
      zipcode: arrayData['zipcode'],
      state: arrayData['state'],
      telephoneNumber: arrayData['telephoneNumber'],
      email: arrayData['email'],
      contactFirstname: arrayData['contactFirstname'],
      contactLastname: arrayData['contactLastname'],
      contactTelephone: arrayData['contactTelephone'],
      contactEmail: arrayData['contactEmail'],
    }

    var newPatient: Patient = {
      id: this.getRandomID().toString(),
      person: newPerson,
      bloodType: arrayData['bloodType'],
      insuranceCompany: arrayData['insuranceCompany'],
      insuranceNumber: arrayData['insuranceNumber'],
      height: arrayData['height'],
      weight: arrayData['weight']
    }

    this.patientService.savePatient(newPatient);

    this.navigateTo(newPatient.id);
  }

  changeDisabled(item: FormItemConfig)
  {
    this.config?.sections.forEach((section) => {
      section.items.forEach((sectionItem) => {
        item.willDisable?.forEach((itemToDisable) => {
          if (sectionItem.id === itemToDisable && item.value === "mužské")
          {
            sectionItem.disabled = true;
          } else if (sectionItem.id === itemToDisable && (item.value === "ženské" || item.value === "neuvedené"))
          {
            sectionItem.disabled = false;
          }
        } )
      });
    });
  }

  public navigateTo(idPatient: string)
  {
    this.router.navigate(['/patient/' + idPatient]);
  }

  private getRandomID() {
    return Math.floor(Math.random() * 99999999 ); // Number.MAX_SAFE_INTEGER
  }

}
