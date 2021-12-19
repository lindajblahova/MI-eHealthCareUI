
export interface IDiagnose {
  idDiagnose: string;
  diagnoseName: string;
  description?: string;
}

export class Diagnose {
  idDiagnose: string = '';
  diagnoseName: string = '';
  description?: string = '';

  constructor() {
  }
}
