import {IPatient} from "./IPatient";
import {IAnamnesis} from "./IAnamnesis";
import {IAcceptance} from "./IAcceptance";
import {IDismissal} from "./IDismissal";
import {IDiagnose} from "./IDiagnose";
import {IBed} from "./IRoom";

export interface IHospitalization {
  idHospitalization: string;
  patient: IPatient;
  dateFrom: Date;
  timeFrom: string;
  dateTo: Date;
  timeTo: string;
  ongoing: boolean | null;
  diagnose: IDiagnose;
  bed: IBed;

  anamnesis: IAnamnesis;
  acceptance: IAcceptance;
  dismissal: IDismissal;
}

export class Hospitalization implements IHospitalization {
  idHospitalization: string = "";
  patient: IPatient;
  dateFrom: Date = new Date(0);
  timeFrom: string = "";
  dateTo: Date = new Date(0);
  timeTo: string = "";
  ongoing: boolean | null = null;
  diagnose: IDiagnose;
  bed: IBed;

  anamnesis: IAnamnesis;
  acceptance: IAcceptance;
  dismissal: IDismissal;

  constructor(patient: IPatient, anamnesis: IAnamnesis, acceptance: IAcceptance, dismissal: IDismissal, diagnose: IDiagnose, bed: IBed) {
    this.patient = patient;
    this.anamnesis = anamnesis;
    this.acceptance = acceptance;
    this.dismissal = dismissal;
    this.diagnose = diagnose;
    this.bed = bed;
  }
}
