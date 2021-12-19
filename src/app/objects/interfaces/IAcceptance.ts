import {IDiagnose} from "./IDiagnose";

export interface IAcceptance {
  type: string; // emergency, planned,...
  acceptingDoctor: string;
  nursingDoctor: string;
  wasRecommended: boolean | null;
  recommendedBy?: string;
  diagnose: IDiagnose;
  patientCondition: string; // stable, serious,..
  plannedOperation: boolean | null; // yes/no
  operationCode?: string;
  condition?: string;

  allergies?: string;
  currentDiagnoses?: string;
  medicalFinding?: string;
  conclusion?: string;
}

export class Acceptance implements IAcceptance {
  type: string = ''; // emergency, planned,...
  acceptingDoctor: string = '';
  nursingDoctor: string = '';
  wasRecommended: boolean | null;
  recommendedBy?: string = '';
  diagnose: IDiagnose;
  patientCondition: string = ''; // stable, serious,..
  plannedOperation: boolean | null; // yes/no
  operationCode?: string = '';
  condition?: string = '';

  allergies?: string = '';
  currentDiagnoses?: string = '';
  medicalFinding?: string = '';
  conclusion?: string = '';

  constructor(diagnose: IDiagnose) {
    this.diagnose = diagnose;
  }
}

