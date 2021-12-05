import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {FormConfig, FormItemConfig} from "../../objects/form.config";
import {MatTableFilter} from "mat-table-filter";
import {animate, state, style, transition, trigger} from "@angular/animations";

export interface TableColumn {
  id: string;
  label: string;
}

export interface PeriodicElement {
  menoPacienta: string;
  idPacienta: string;
  rcPacienta: string;
  idHospitalizacie: string;
  kodPoistovne: string;
  kodDiagnozy: string;
  datumPrijmu: string;
  datumPrepustenia: string;
  prebiehajuca: boolean | null;
  odporucilLekar: string;
  prijimajuciLekar: string;
  osetrujuciLekar: string;
  prepustajuciLekar: string;
}

export class IHospitalization implements PeriodicElement {
  menoPacienta: string = '';
  idPacienta: string = '';
  rcPacienta: string = '';
  idHospitalizacie: string = '';
  kodPoistovne: string = '';
  kodDiagnozy: string = '';
  datumPrijmu: string = '';
  datumPrepustenia: string = '';
  prebiehajuca: boolean = null;
  odporucilLekar: string = '';
  prijimajuciLekar: string = '';
  osetrujuciLekar: string = '';
  prepustajuciLekar: string = '';

  constructor() {
  }
}

const ELEMENT_DATA: IHospitalization[] = [
  {
    menoPacienta: 'Linda Blahova',
    idPacienta: '654456',
    rcPacienta: '998877/6655',
    idHospitalizacie: '123456',
    kodPoistovne: '2250',
    kodDiagnozy: 'I456',
    datumPrijmu: '02. 12. 2021',
    datumPrepustenia: '-',
    prebiehajuca: true,
    odporucilLekar: '-',
    prijimajuciLekar: 'MUDr. Peter Dobry',
    osetrujuciLekar: 'MUDr. Lukas Modry',
    prepustajuciLekar: 'MUDr. Lukas Modry'
  },
  {
    menoPacienta: 'Albert Sim',
    idPacienta: '123321',
    rcPacienta: '661122/3300',
    idHospitalizacie: '789456',
    kodPoistovne: '2230',
    kodDiagnozy: 'I963',
    datumPrijmu: '18. 11. 2021',
    datumPrepustenia: '25. 11. 2021',
    prebiehajuca: false,
    odporucilLekar: 'MUDr. Jana Mala',
    prijimajuciLekar: 'MUDr. Marek Gajdos',
    osetrujuciLekar: 'MUDr. Lukas Modry',
    prepustajuciLekar: 'MUDr. Marek Gajdos',
  }
];

@Component({
  selector: 'app-hospitalizations',
  templateUrl: './hospitalizations.component.html',
  styleUrls: ['./hospitalizations.component.scss'],
})
export class HospitalizationsComponent implements OnInit {

  displayedColumns: TableColumn[] = [
    {
      id: 'menoPacienta',
      label: 'Meno pacienta'
    },
    {
      id: 'idPacienta',
      label: 'ID pacienta'
    },
    {
      id: 'rcPacienta',
      label: 'RC pacienta'
    },
    {
      id: 'idHospitalizacie',
      label: 'ID Hospitalizacie'
    },
    {
      id: 'kodPoistovne',
      label: 'Kod Poistovne'
    },
    {
      id: 'kodDiagnozy',
      label: 'Kod Diagnozy'
    },
    {
      id: 'datumPrijmu',
      label: 'Datum Prijmu'
    },
    {
      id: 'datumPrepustenia',
      label: 'Datum Prepustenia'
    },
    {
      id: 'odporucilLekar',
      label: 'Odporucil Lekar'
    },
    {
      id: 'prijimajuciLekar',
      label: 'Prijimajuci Lekar'
    },
    {
      id: 'osetrujuciLekar',
      label: 'Osetrujuci Lekar'
    },
    {
      id: 'prepustajuciLekar',
      label: 'Prepustajuci Lekar'
    },
  ];
  displayedCols: string[] = ['menoPacienta', 'idPacienta', 'rcPacienta', 'idHospitalizacie', 'kodPoistovne',
    'kodDiagnozy', 'datumPrijmu', 'datumPrepustenia', 'odporucilLekar', 'prijimajuciLekar', 'osetrujuciLekar',
    'prepustajuciLekar'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  filterEntity: IHospitalization = new IHospitalization();
  filterType: MatTableFilter = MatTableFilter.ANYWHERE;
  expandedElement: any;
  clickedButton: number = 3;

  public config?: FormConfig;

  constructor() {
  }

  ngOnInit(): void {
    this.setConfig();

  }

  public setConfig() {

    const formCnfg: FormConfig = {
      sections: [
        {
          name: "Filtrovanie hospitalizácií",
          items: [
            {
              id: 'menoPacienta',
              label: 'Meno Pacienta',
              type: 'text',
              class: '',
              value: '',
              required: false
            },
            {
              id: 'idPacienta',
              label: 'ID Pacienta',
              type: 'text',
              class: '',
              value: '',
              required: false
            },
            {
              id: 'rcPacienta',
              label: 'RČ Pacienta',
              type: 'text',
              class: '',
              value: '',
              required: false
            },
            {
              id: 'idHospitalizacie',
              label: 'Id hospitalizácie',
              type: 'text',
              class: '',
              value: '',
              required: false
            },
            {
              id: 'kodPoistovne',
              label: 'Kód Poistovne',
              type: 'text',
              class: '',
              value: '',
              required: false
            },
            {
              id: 'kodDiagnozy',
              label: 'Kód diagnózy',
              type: 'text',
              class: '',
              value: '',
              required: false
            },
            {
              id: 'datumPrijmu',
              label: 'Dátum príjmu',
              type: 'text',
              class: '',
              value: '',
              required: false
            },
            {
              id: 'datumPrepustenia',
              label: 'Dátum prepustenia',
              type: 'text',
              class: '',
              value: '',
              required: false
            },
            {
              id: 'odporucilLekar',
              label: 'Odporučil Lekár',
              type: 'text',
              class: '',
              value: '',
              required: false
            },
            {
              id: 'prijimajuciLekar',
              label: 'Prijímajúci Lekár',
              type: 'text',
              class: '',
              value: '',
              required: false
            },
            {
              id: 'osetrujuciLekar',
              label: 'Ošetrujúci Lekár',
              type: 'text',
              class: '',
              value: '',
              required: false
            },
            {
              id: 'prepustajuciLekar',
              label: 'Prepúšťajúci Lekár',
              type: 'text',
              class: '',
              value: '',
              required: false
            },
          ]
        }
      ]
    }

    this.config = formCnfg;
  }

  filterTable(item: FormItemConfig) {

    switch (item.id) {
      case 'menoPacienta':
        this.filterEntity.menoPacienta = item.value;
        break;
      case 'idPacienta':
        this.filterEntity.idPacienta = item.value;
        break;
      case 'rcPacienta':
        this.filterEntity.rcPacienta = item.value;
        break;
      case 'idHospitalizacie':
        this.filterEntity.idHospitalizacie = item.value;
        break;
      case 'kodPoistovne':
        this.filterEntity.kodPoistovne = item.value;
        break;
      case 'kodDiagnozy':
        this.filterEntity.kodDiagnozy = item.value;
        break;
      case 'datumPrijmu':
        this.filterEntity.datumPrijmu = item.value;
        break;
      case 'datumPrepustenia':
        this.filterEntity.datumPrepustenia = item.value;
        break;
      case 'odporucilLekar':
        this.filterEntity.odporucilLekar = item.value;
        break;
      case 'prijimajuciLekar':
        this.filterEntity.prijimajuciLekar = item.value;
        break;
      case 'osetrujuciLekar':
        this.filterEntity.osetrujuciLekar = item.value;
        break;
      case 'prepustajuciLekar':
        this.filterEntity.prepustajuciLekar = item.value;
        break;
    }

  }

  changeHospitalizationType(id: number) {

    this.clickedButton = id;
    switch (this.clickedButton) {
      case 1:
        this.filterEntity.prebiehajuca = true;
        break;
      case 2:
        this.filterEntity.prebiehajuca = false;
        break;
      case 3:
        this.filterEntity.prebiehajuca = null;
        break;
    }
  }

}
