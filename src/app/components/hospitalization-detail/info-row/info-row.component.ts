import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IPatient} from "../../../objects/interfaces/IPatient";
import {IPerson} from "../../../objects/interfaces/IPerson";
import {MatTableDataSource} from "@angular/material/table";
import {FormConfig} from "../../../objects/form.config";
import {Hospitalization, IHospitalization} from "../../../objects/interfaces/IHospitalization";
import {DiagnoseRecordService} from "../../../services/diagnose-record.service";
import {DiagnoseRecord} from "../../../objects/interfaces/IDiagnoseRecord";
import {Diagnose, IDiagnose} from "../../../objects/interfaces/IDiagnose";


@Component({
  selector: 'app-info-row',
  templateUrl: './info-row.component.html',
  styleUrls: ['./info-row.component.scss']
})
export class InfoRowComponent implements OnInit, OnChanges {

  @Input() editMode: boolean;
  @Input() hospitalization: Hospitalization;
  displayedColumns: string[] = ['diagnose', 'localization', 'description', 'severity', 'state'];
  dataSource: MatTableDataSource<any>;
  newDiagnoseRecord: DiagnoseRecord = new DiagnoseRecord();
  dateFrom: Date;
  dateTo: Date;
  invalidDate;

  isFormDisplayed: boolean = true;


  public patient: IPatient;
  public patientDiagnoseRecords: DiagnoseRecord[];

  public config?: FormConfig;

  constructor(private diagnoseRecordService: DiagnoseRecordService) {
    this.invalidDate = new Date(0);
  }

  ngOnInit(): void {
    this.patient = this.hospitalization.patient;
    if (this.hospitalization.dateTo !== null && this.hospitalization.dateTo.getTime() == this.invalidDate.getTime())
    {
      this.hospitalization.dateTo = null;
    }

    this.isFormDisplayed = this.diagnoseRecordService.getPatientDiagnoses(this.patient.id).find(
        record => record.hospitalization === this.hospitalization) === undefined;

    this.patientDiagnoseRecords = this.diagnoseRecordService.getPatientDiagnoses(this.patient.id);
    this.dataSource = new MatTableDataSource(this.patientDiagnoseRecords);

    this.newDiagnoseRecord.patient = this.patient;
    this.newDiagnoseRecord.diagnose = this.hospitalization.diagnose;
    this.newDiagnoseRecord.hospitalized = true;
    this.newDiagnoseRecord.hospitalization = this.hospitalization;

    this.setConfig();
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes['editMode'].currentValue == false && this.config) {

      if (this.hospitalization.dateFrom !== null)
      {
        this.hospitalization.dateFrom = new Date(this.hospitalization.dateFrom);
      }

    if (this.hospitalization.dateTo !== null)
      {
        this.hospitalization.dateTo = new Date(this.hospitalization.dateTo);
      }

      if (this.hospitalization.dateTo === null && this.hospitalization.ongoing === false)
      {
        this.hospitalization.dateTo = new Date();
      }

    }
  }

  saveDiagnoseRecord(): void
  {
    var arrayData: any = {};
    this.config.sections.forEach((section) => {
      section.items.forEach((item) => {
        arrayData[item.id] = item.value;
      });
    });

    this.newDiagnoseRecord.localization = arrayData['localization'];
    this.newDiagnoseRecord.localization = arrayData['localization'];
    this.newDiagnoseRecord.description = arrayData['description'];
    this.newDiagnoseRecord.severity = arrayData['severity'];
    this.newDiagnoseRecord.state = arrayData['state'];
    this.diagnoseRecordService.saveDiagnoseRecord(this.newDiagnoseRecord);
    this.ngOnInit();
  }

  public setConfig() {
    const formCnfg: FormConfig = {
      sections: [
        {
          name: "",
          items: [
            {
              id: 'diagnose',
              label: 'Diagnóza',
              type: 'text',
              class: '',
              value: this.newDiagnoseRecord.diagnose.idDiagnose + '' + this.newDiagnoseRecord.diagnose.diagnoseName,
              required: false,
            },
            {
              id: 'localization',
              label: 'Lokalizácia',
              type: 'text',
              class: '',
              value: this.newDiagnoseRecord.localization,
              required: false
            },
            {
              id: 'description',
              label: 'Popis',
              type: 'text',
              class: '',
              value: this.newDiagnoseRecord.description,
              required: false
            },
            {
              id: 'severity',
              label: 'Závažnosť',
              type: 'select',
              class: '',
              value: this.newDiagnoseRecord.severity,
              required: false,
              options: ["0 - Minimálna","1 - Nízka", "2 - Mierna", "3 - Vysoká", "4 - Maximálna"],
            },
            {
              id: 'state',
              label: 'Stav',
              type: 'select',
              class: '',
              value: this.newDiagnoseRecord.state,
              required: false,
              options: ["0 - Prebiehajúce","1 - Prekonané"],
            }
          ]
        }
      ]
    }

    this.config = formCnfg;
  }
}
