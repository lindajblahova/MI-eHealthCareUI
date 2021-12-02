import {Component, Input, OnInit} from '@angular/core';
import {FormConfig, FormItemConfig} from "../../../objects/form.config";

@Component({
  selector: 'app-dismissal',
  templateUrl: './dismissal.component.html',
  styleUrls: ['./dismissal.component.scss']
})
export class DismissalComponent implements OnInit {

  @Input() editMode: boolean = false;
  public config?: FormConfig;

  constructor() { }

  ngOnInit(): void {
    this.setConfig();
  }

  public setConfig() {

    const formCnfg: FormConfig = {
      sections: [
        {
          name: "",
          items: [
            {
              id: 'sposobPrijatia',
              label: 'Spôsob prijatia',
              type: 'text',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'typHospitalizacie',
              label: 'Typ hospitalizácie',
              type: 'text',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'prijimajuciLekar',
              label: 'Prijímajúci lekár',
              type: 'text',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'osetrujuciLekar',
              label: 'Ošetrujúci lekár',
              type: 'text',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'odporucanePrijatie',
              label: 'Odporúčané prijatie',
              type: 'checkbox',
              class: '',
              value: '',
              required: true,
              willDisable: ['odporucilLekar', 'odporucanaDiagnoza','datumOdporucania']
            },
            {
              id: 'odporucilLekar',
              label: 'Odporučil lekár',
              type: 'text',
              class: '',
              value: '',
              required: true,
              disabled: true
            },
            {
              id: 'odporucanaDiagnoza',
              label: 'Odporúčaná diagnóza',
              type: 'text',
              class: '',
              value: '',
              required: true,
              disabled: true
            },
            {
              id: 'datumOdporucania',
              label: 'Dátum odporúčania',
              type: 'datepicker',
              class: '',
              value: '',
              required: true,
              disabled: true
            }
          ]
        },
        {
          name: "",
          items: [
            {
              id: 'zakladnaDiagnoza',
              label: 'Základná diagnóza',
              type: 'number',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'prijimovaDiagnoza',
              label: 'Prijímová diagnóza',
              type: 'number',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'stavPacienta',
              label: 'Stav Pacienta',
              type: 'number',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'opakovanaHospitalizacia',
              label: 'Opakovaná hospitalizácia',
              type: 'text',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'planovanyVykon',
              label: 'Plánovaný výkon',
              type: 'text',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'typVykonu',
              label: 'Typ výkonu',
              type: 'text',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'stavPoistenia',
              label: 'Stav Poistenia',
              type: 'number',
              class: '',
              value: '',
              required: true
            }
          ]
        }
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
}

