import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormConfig, FormItemConfig} from "../../../objects/form.config";
import {MatSort, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatTableDataSource} from "@angular/material/table";


@Component({
  selector: 'app-acceptance',
  templateUrl: './acceptance.component.html',
  styleUrls: ['./acceptance.component.scss']
})
export class AcceptanceComponent implements OnInit {

  @Input() editMode: boolean = false;
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  public config?: FormConfig;
  public configTextAreas?: FormConfig;

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  ngOnInit(): void {
    this.setConfig();
    this.setConfigTextAreas();
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
              willDisable: ['odporucilLekar', 'odporucanaDiagnoza', 'datumOdporucania']
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

  public setConfigTextAreas() {

    const formCnfg: FormConfig = {
      sections: [
        {
          name: "",
          items: [
            {
              id: 'alergieAUpozornenia',
              label: 'Alergie a dôležité upozornenia',
              type: 'textarea',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'terajsieOchorenia',
              label: 'Terajšie ochorenia',
              type: 'textarea',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'objektivnyNalez',
              label: 'Objektívny nález',
              type: 'textarea',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'zhrnutie',
              label: 'Zhrnutie',
              type: 'textarea',
              class: '',
              value: '',
              required: true,
            }
          ]
        }
      ]
    }

    this.configTextAreas = formCnfg;
  }

  changeDisabled(item: FormItemConfig) {
    this.config?.sections.forEach((section) => {
      section.items.forEach((sectionItem) => {
        item.willDisable?.forEach((itemToDisable) => {
          if (sectionItem.id === itemToDisable) {
            sectionItem.disabled = !sectionItem.disabled;
          }
        })

      });
    });
  }
}
