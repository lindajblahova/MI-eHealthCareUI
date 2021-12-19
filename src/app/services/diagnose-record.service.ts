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
        severity: '0 - Nízka',
        state: 'Prebiehajúce',
        hospitalized: false
      },
      {
        idDiagnoseRecord: '3132',
        diagnose: this.diagnoseService.getAllDiagnoses()[1],
        patient: this.patientService.getAllPatients()[1],
        localization: 'pravé predkolenie',
        severity: '0 - Nízka',
        state: 'Prebiehajúce',
        hospitalized: true,
        hospitalization: this.hospitalizationService.getAllHospitalizations()[1]
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
