import {IPatient} from "./IPatient";
import {IDoctor} from "./IDoctor";

export interface IHospitalization {
  id: string;
  patient: IPatient;
  dateFrom: string;
  dateTo: string;
  ongoing: boolean;
  acceptingDoctor: IDoctor;
  diagnose: string;
  bed: string;
}
