import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatTableFilter} from "mat-table-filter";
import {Patient} from "../../objects/interfaces/IPatient";
import {FormConfig, FormItemConfig} from "../../objects/form.config";
import { Person} from "../../objects/interfaces/IPerson";
import {PatientService} from "../../services/patient.service";
import {MenuItemConfig} from "../../objects/menu.config";
import {Router} from "@angular/router";
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  public patients: Patient[];

  displayedCols: string[] = ['id', 'firstname', 'lastname', 'identificationNumber', 'detail'];
  dataSource: any;
  person: Person = new Person();
  filterEntity: Patient = new Patient(this.person);
  filterType: MatTableFilter = MatTableFilter.ANYWHERE;
  clickedPatient: Patient;
  public config?: FormConfig;

  constructor(private patientService: PatientService, private router: Router, private sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.setConfig();
    this.patients = this.patientService.getAllPatients();
    this.dataSource = new MatTableDataSource(this.patients);
  }

  public setConfig() {

    const formCnfg: FormConfig = {
      sections: [
        {
          name: "Filtrovanie hospitalizácií",
          items: [
            {
              id: 'id',
              label: 'ID Pacienta',
              type: 'text',
              class: '',
              value: '',
              required: false
            },
            {
              id: 'firstname',
              label: 'Meno',
              type: 'text',
              class: '',
              value: '',
              required: false
            },
            {
              id: 'lastname',
              label: 'Priezvisko',
              type: 'text',
              class: '',
              value: '',
              required: false
            },
            {
              id: 'identificationNumber',
              label: 'RČ Pacienta',
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
      case 'id':
        this.filterEntity.id = item.value;
        break;
      case 'identificationNumber':
        this.filterEntity.person.identificationNumber = item.value;
        break;
      case 'firstname':
        this.filterEntity.person.firstname = item.value;
        break;
      case 'lastname':
        this.filterEntity.person.lastname = item.value;
        break;
    }
  }

  public async navigateTo(patient: Patient) {
    this.sharedService.loading = true;
    await new Promise(f => setTimeout(f, 200));
    this.router.navigate(['/patient/' + patient.id]);
  }
}
