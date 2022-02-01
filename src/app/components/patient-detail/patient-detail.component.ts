import {Component, OnInit} from '@angular/core';
import {Patient} from "../../objects/interfaces/IPatient";
import {ActivatedRoute} from "@angular/router";
import {PatientService} from "../../services/patient.service";
import {SharedService} from "../../services/shared.service";
import {DiagnoseRecordService} from "../../services/diagnose-record.service";
import {DiagnoseRecord} from "../../objects/interfaces/IDiagnoseRecord";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent implements OnInit {

  public patient: Patient;
  public diagnoseRecords: DiagnoseRecord[];
  private id: string = this.activatedRoute.snapshot.paramMap.get("id");
  displayedColumns: string[] = ['diagnose', 'localization', 'description', 'severity', 'state'];
  dataSource: MatTableDataSource<any>;

  constructor(private activatedRoute: ActivatedRoute,
              private patientService: PatientService, private sharedService: SharedService,
              private diagnoseRecordService: DiagnoseRecordService ) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");

    this.patient = this.patientService.getPatient(this.id);
    this.diagnoseRecords = this.diagnoseRecordService.getPatientDiagnoses(this.patient.id);
    this.dataSource = new MatTableDataSource(this.diagnoseRecords);
    this.sharedService.loading = false;
  }

  ngOnInit(): void {

  }

}
