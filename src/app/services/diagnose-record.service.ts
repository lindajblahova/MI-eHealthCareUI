import {Injectable} from "@angular/core";
import {IDiagnoseRecord} from "../objects/interfaces/IDiagnoseRecord";
import {PatientService} from "./patient.service";
import {HospitalizationService} from "./hospitalization.service";
import {DiagnoseService} from "./diagnose.service";

@Injectable({
  providedIn: 'root'
})
export class DiagnoseRecordService {

  private diagnoseRecords: IDiagnoseRecord[] =
    [
      {
        idDiagnoseRecord: '46325',
        diagnose: this.diagnoseService.getAllDiagnoses()[0],
        patient: this.patientService.getAllPatients()[0],
        localization: '',
        severity: '0 - Minimálna',
        state: '0 - Prebiehajúce',
        hospitalized: false
      },
      {
        idDiagnoseRecord: '31324',
        diagnose: this.diagnoseService.getAllDiagnoses()[35],
        patient: this.patientService.getAllPatients()[1],
        localization: 'pravé predkolenie',
        severity: '1 - Nízka',
        state: '0 - Prebiehajúce',
        hospitalized: true,
        hospitalization: this.hospitalizationService.getAllHospitalizations()[1]
      },
      {
        idDiagnoseRecord: '75125',
        diagnose: this.diagnoseService.getAllDiagnoses()[20],
        patient: this.patientService.getAllPatients()[2],
        severity: '2 - Mierna',
        state: '0 - Prebiehajúce',
        hospitalized: false,
      },
      {
        idDiagnoseRecord: '75125',
        diagnose: this.diagnoseService.getAllDiagnoses()[38],
        patient: this.patientService.getAllPatients()[3],
        severity: '3 - Vysoká',
        state: '1 - Prekonané',
        hospitalized: false,
      },
    ];

  constructor(private patientService: PatientService, private hospitalizationService: HospitalizationService,
              private diagnoseService: DiagnoseService) {
  }

  public getPatientDiagnoses(idPatient: string): IDiagnoseRecord[] {
    return this.diagnoseRecords.filter(x => x.patient.id === idPatient);
  }

  public saveDiagnoseRecord(diagnoseRecord: IDiagnoseRecord): void {
    this.diagnoseRecords.push(diagnoseRecord);
  }

}
