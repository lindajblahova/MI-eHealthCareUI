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
  public configTextAreas?: FormConfig;

  constructor() { }

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
              id: 'ukoncenieHospitalizacie',
              label: 'Ukončenie hospitalizácie',
              type: 'text',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'dovodPrepustenia',
              label: 'Dôvod prepustenia',
              type: 'text',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'prepustajuciLekar',
              label: 'Prepúšťajúci lekár',
              type: 'text',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'druhLiecby',
              label: 'Druh vykonanej liečby',
              type: 'text',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'pocetDniNaPriepustke',
              label: 'Počet dní na priepustke',
              type: 'text',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'pocetDniNaJIS',
              label: 'Počet dní na JIS',
              type: 'number',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'pocetOperacnychVykonov',
              label: 'Počet operačných výkonov',
              type: 'number',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'kodOperacnehoVykonu',
              label: 'Kód operačného výkonu',
              type: 'text',
              class: '',
              value: '',
              required: false
            },
            {
              id: 'odovzdanyDoStarostlivosti',
              label: 'Odovzdaný do starostlivosti',
              type: 'text',
              class: '',
              value: '',
              required: false
            },
            {
              id: 'ziskanaKomplikaciaPriPrepusteni',
              label: 'Získaná komplikácia pri prepustení',
              type: 'text',
              class: '',
              value: '',
              required: false
            },
            {
              id: 'priamaPlatba',
              label: 'Priama platba',
              type: 'number',
              class: '',
              value: '€',
              required: false
            }
          ]
        },
        {
          name: "",
          items: [
            {
              id: 'presunPacienta',
              label: 'Presun pacienta',
              type: 'checkbox',
              class: '',
              value: '',
              required: true,
              willDisable: ['miestoPresunu', 'dovodPresunu']
            },
            {
              id: 'miestoPresunu',
              label: 'Miesto presunu',
              type: 'select',
              class: '',
              value: '',
              required: true,
              disabled: true
            },
            {
              id: 'dovodPresunu',
              label: 'Dôvod presunu',
              type: 'text',
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
              id: 'umrtiePacienta',
              label: 'Úmrtie pacienta',
              type: 'checkbox',
              class: '',
              value: '',
              required: true,
              willDisable: ['zakladnaPricinaSmrti', 'datumUmrtia','casUmrtia']
            },
            {
              id: 'zakladnaPricinaSmrti',
              label: 'Základná príčina smrti',
              type: 'text',
              class: '',
              value: '',
              required: true,
              disabled: true
            },
            {
              id: 'datumUmrtia',
              label: 'Dátum úmrtia',
              type: 'datepicker',
              class: '',
              value: '',
              required: true,
              disabled: true
            },
            {
              id: 'casUmrtia',
              label: 'Čas Úmrtia',
              type: 'timepicker',
              class: '',
              value: '',
              required: true,
              disabled: true
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
              id: 'laboratorneVysledky',
              label: 'Laboratórne výsledky',
              type: 'textarea',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'vysetrenia',
              label: 'Vyšetrenia',
              type: 'textarea',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'liecbaPocasHospitalizacie',
              label: 'Liečba počas hospitalizácie',
              type: 'textarea',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'priebehHospitalizacie',
              label: 'Priebeh Hospitalizácie',
              type: 'textarea',
              class: '',
              value: '',
              required: true,
            },
            {
              id: 'diagnostickyZaver',
              label: 'Diagnostický záver',
              type: 'textarea',
              class: '',
              value: '',
              required: true,
            },
            {
              id: 'odporucanie',
              label: 'Odporúčanie',
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

