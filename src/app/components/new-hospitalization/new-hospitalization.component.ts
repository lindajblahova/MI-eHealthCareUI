import { Component, OnInit } from '@angular/core';
import {FormConfig, FormItemConfig} from "../../objects/form.config";

@Component({
  selector: 'app-new-hospitalization',
  templateUrl: './new-hospitalization.component.html',
  styleUrls: ['./new-hospitalization.component.scss']
})
export class NewHospitalizationComponent implements OnInit {

  public config?: FormConfig;

  medicals: string[] = ['Nalgesin', 'Ibuprofen', 'Paralen'];
  filteredMedicals: string[] = [];

  patients: string[] = ['996655/4433 - Linda Blahova', '987654/3210 - Roman Dobrik', '781203/8523 - Jozef Petrik'];
  filteredPatients: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.setConfig();
  }

  public setConfig() {

    const formCnfg: FormConfig = {
      sections: [
        {
          name: "Pacient",
          items: [
            {
              id: 'menoPriezvisko',
              label: 'Meno a priezvisko',
              type: 'autocompleteSelect',
              class: '',
              value: '',
              required: true
            }
          ]
        },
        {
          name: "Trvanie hospitalizácie",
          items: [
            {
              id: 'datumOd',
              label: 'Dátum od',
              type: 'datepicker',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'casOd',
              label: 'Čas od',
              type: 'timepicker',
              class: '',
              value: '',
              required: true
            }
          ]
        },
        {
          name: "",
          items: [
            {
              id: 'datumDo',
              label: 'Dátum do',
              type: 'datepicker',
              class: '',
              value: '',
              required: true,
              disabled: false
            },
            {
              id: 'casDo',
              label: 'Čas do',
              type: 'timepicker',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'prebiehajuca',
              label: 'Prebiehajúca',
              type: 'checkbox',
              class: '',
              value: '',
              required: false,
              willDisable: ['datumDo', 'casDo']
            }
          ]
        },
        {
          name: "Hospitalizácia",
          items: [
            {
              id: 'prijímajuciDoktor',
              label: 'Prijímajúci lekar',
              type: 'text',
              class: '',
              value: '',
              required: false
            },
            {
              id: 'diagnoza',
              label: 'Diagnóza',
              type: 'select',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'lozko',
              label: 'Lozko',
              type: 'select',
              class: '',
              value: '',
              required: false
            }
          ]
        },
      ]
    }

    this.config = formCnfg;
  }

  changeDisabled(item: FormItemConfig)
  {
    this.config?.sections.forEach((section) => {
      section.items.forEach((sectionItem) => {
        item.willDisable?.forEach((itemToDisable) => {
          if (sectionItem.id === itemToDisable)
          {
            sectionItem.disabled = !sectionItem.disabled;
          }
        } )

      });
    });
  }

  filterMedicals(event : string) {
    this.filteredMedicals = [];
    this.medicals.forEach(value => {
      if (value.toLowerCase().indexOf(event.toLowerCase()) > -1) {
        this.filteredMedicals.push(value);
      }
    })
  }

  filterPatients(event : string) {
    this.filteredPatients = [];
    this.patients.forEach(value => {
      if (value.toLowerCase().indexOf(event.toLowerCase()) > -1) {
        this.filteredPatients.push(value);
      }
    })
  }

}
