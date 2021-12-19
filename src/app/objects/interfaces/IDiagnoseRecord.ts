import {IDiagnose} from "./IDiagnose";
import {IPatient} from "./IPatient";
import {IHospitalization} from "./IHospitalization";

export interface IDiagnoseRecord {
  idDiagnoseRecord: string;
  diagnose: IDiagnose;
  patient: IPatient;
  localization?: string;
  description?: string;
  severity: string; // weak, intermediate, strong,..
  state: string; //ongoing, overcome,..
  hospitalized: boolean | null;
  hospitalization?: IHospitalization;
}

export class DiagnoseRecord implements IDiagnoseRecord{
  idDiagnoseRecord: string = '';
  diagnose: IDiagnose;
  patient: IPatient;
  localization?: string = '';
  description?: string;
  severity: string; // weak, intermediate, strong,..
  state: string; //ongoing, overcome,..
  hospitalized: boolean | null;
  hospitalization?: IHospitalization;
}

