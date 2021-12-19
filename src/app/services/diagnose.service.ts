import {Injectable} from "@angular/core";
import {IDiagnose} from "../objects/interfaces/IDiagnose";
import {PatientService} from "./patient.service";

@Injectable({
  providedIn: 'root'
})
export class DiagnoseService {

  private diagnoses: IDiagnose[] =
    [
      {
        idDiagnose: 'D50.-',
        diagnoseName: 'Anémia z nedostatku železa',
      },
      {
        idDiagnose: 'I87.9',
        diagnoseName: 'Choroba žily, bližšie neurčená',
      },
      {
        idDiagnose: 'S92.1',
        diagnoseName: 'Zlomenina členkovej kosti',
      },
    ];

  constructor(private patientService: PatientService) {
  }

  public getAllDiagnoses(): IDiagnose[] {
    return this.diagnoses;
  }

  public getDiagnose(idDiagnose: string): IDiagnose {
    return this.diagnoses.find(diagnose => diagnose.idDiagnose === idDiagnose);
  }

}
