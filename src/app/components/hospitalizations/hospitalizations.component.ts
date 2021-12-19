import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {FormConfig, FormItemConfig} from "../../objects/form.config";
import {MatTableFilter} from "mat-table-filter";
import {HospitalizationService} from "../../services/hospitalization.service";
import {Hospitalization} from "../../objects/interfaces/IHospitalization";
import {Patient} from "../../objects/interfaces/IPatient";
import {Person} from "../../objects/interfaces/IPerson";
import {Anamnesis} from "../../objects/interfaces/IAnamnesis";
import {Acceptance} from "../../objects/interfaces/IAcceptance";
import {Diagnose} from "../../objects/interfaces/IDiagnose";
import {Dismissal} from "../../objects/interfaces/IDismissal";
import {Router} from "@angular/router";
import {Bed, Room} from "../../objects/interfaces/IRoom";
import {SharedService} from "../../services/shared.service";

export interface TableColumn {
  id: string;
  label: string;
}

@Component({
  selector: 'app-hospitalizations',
  templateUrl: './hospitalizations.component.html',
  styleUrls: ['./hospitalizations.component.scss'],
})
export class HospitalizationsComponent implements OnInit {

  displayedColumns: TableColumn[] = [
    {
      id: 'patient.person.firstname',
      label: 'Meno pacienta'
    },
    {
      id: 'patient.person.lastname',
      label: 'Priezvisko pacienta'
    },
    {
      id: 'patient.id',
      label: 'ID pacienta'
    },
    {
      id: 'patient.person.identificationNumber',
      label: 'RČ pacienta'
    },
    {
      id: 'idHospitalization',
      label: 'ID Hospitalizácie'
    },
    {
      id: 'patient.insuranceCompany',
      label: 'Kód Poisťovne'
    },
    {
      id: 'diagnose.idDiagnose',
      label: 'Kód Diagnózy'
    },
    {
      id: 'dateFrom',
      label: 'Datum Prijmu'
    },
    {
      id: 'dateTo',
      label: 'Datum Prepustenia'
    },
    {
      id: 'acceptance.recommendedBy',
      label: 'Odporučil Lekár'
    },
    {
      id: 'acceptance.acceptingDoctor',
      label: 'Prijímajúci Lekár'
    },
    {
      id: 'acceptance.nursingDoctor',
      label: 'Ošetrujúci Lekár'
    },
    {
      id: 'dismissal.dismissingDoctor',
      label: 'Prepúšťajúci Lekár'
    },
  ];
  displayedCols: string[] = ['patient.person.firstname', 'patient.person.lastname', 'patient.id',
    'patient.person.identificationNumber', 'idHospitalization', 'patient.insuranceCompany',
    'diagnose.idDiagnose', 'dateFrom', 'dateTo', 'acceptance.recommendedBy', 'acceptance.acceptingDoctor',
    'acceptance.nursingDoctor',
    'dismissal.dismissingDoctor'];
  dataSource;
  filterRoom: Room = new Room();
  filterPerson: Person = new Person();
  filterAnamnesis: Anamnesis = new Anamnesis();
  filterDiagnose: Diagnose = new Diagnose();
  filterAcceptance: Acceptance = new Acceptance(this.filterDiagnose);
  filterDismissal: Dismissal = new Dismissal();
  filterPatient: Patient = new Patient(this.filterPerson);
  filterEntity: Hospitalization = new Hospitalization(this.filterPatient, this.filterAnamnesis,
    this.filterAcceptance, this.filterDismissal, this.filterDiagnose, null);
  filterType: MatTableFilter = MatTableFilter.ANYWHERE;
  expandedElement: any;
  clickedButton: number = 3;
  hospitalizations: Hospitalization[];
  invalidDate;

  public config?: FormConfig;

  constructor(private hospitalizationService: HospitalizationService,
              private router: Router, private sharedService: SharedService) {
    this.invalidDate = new Date(0);
    this.hospitalizations = this.hospitalizationService.getAllHospitalizations();
    this.hospitalizations.forEach(hospitalization => {
      if (hospitalization.dateTo !== null && hospitalization.dateTo.getTime() === this.invalidDate.getTime())
      {
        hospitalization.dateTo = null;
      }
    })
  }

  ngOnInit(): void {

    this.setConfig();
    this.dataSource = new MatTableDataSource(this.hospitalizations);
    console.log(this.hospitalizations);
  }

  findColumnValue = (element:unknown, column:string):string => <string>column.split('.').reduce((acc, cur) => acc[cur], element);

  public setConfig() {

    const formCnfg: FormConfig = {
      sections: [
        {
          name: "Filtrovanie hospitalizácií",
          items: [
            {
              id: 'firstname',
              label: 'Meno Pacienta',
              type: 'text',
              class: '',
              value: '',
              required: false
            },
            {
              id: 'lastname',
              label: 'Priezvisko Pacienta',
              type: 'text',
              class: '',
              value: '',
              required: false
            },
            {
              id: 'idPatient',
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
      case 'firstname':
        this.filterEntity.patient.person.firstname = item.value;
        break;
      case 'lastname':
        this.filterEntity.patient.person.lastname = item.value;
        break;
      case 'idPacienta':
        this.filterEntity.patient.id = item.value;
        break;
      case 'rcPacienta':
        this.filterEntity.patient.person.identificationNumber = item.value;
        break;
      case 'idHospitalizacie':
        this.filterEntity.idHospitalization = item.value;
        break;
      case 'kodPoistovne':
        this.filterEntity.patient.insuranceCompany = item.value;
        break;
      case 'kodDiagnozy':
        this.filterEntity.acceptance.diagnose = item.value;
        break;
      case 'datumPrijmu':
        this.filterEntity.dateFrom = item.value;
        break;
      case 'datumPrepustenia':
        this.filterEntity.dateTo = item.value;
        break;
      case 'odporucilLekar':
        this.filterEntity.acceptance.recommendedBy = item.value;
        break;
      case 'prijimajuciLekar':
        this.filterEntity.acceptance.acceptingDoctor = item.value;
        break;
      case 'osetrujuciLekar':
        this.filterEntity.acceptance.nursingDoctor = item.value;
        break;
      case 'prepustajuciLekar':
        this.filterEntity.dismissal.dismissingDoctor = item.value;
        break;
    }

  }

  changeHospitalizationType(id: number) {

    this.clickedButton = id;
    switch (this.clickedButton) {
      case 1:
        this.filterEntity.ongoing = true;
        break;
      case 2:
        this.filterEntity.ongoing = false;
        break;
      case 3:
        this.filterEntity.ongoing = null;
        break;
    }
  }

  public async navigateTo(id: string, path: string) {
    this.sharedService.loading = true;
    await new Promise(f => setTimeout(f, 200));
    this.router.navigate(['/' + path + id]);
  }
}
