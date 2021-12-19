
export interface IDismissal {
  reasonOfDismissal: string; // done treatment, patient requested, death,...
  dismissingDoctor: string;
  treatmentType: string; // medication, operation, infusion, resuscitation, rehabilitation
  numberOfDaysOnICU?: number | null;
  gainedComplication: string;
  directPayment?: number;
  relocation?: boolean | null; // yes/no
  relocationPlace?: string;
  relocationReason?: string;
  performedOperation?: boolean | null; // yes/no
  death?: boolean | null; // yes/no
  deathReason?: string;
  dateOfDeath?: Date;
  timeOfDeath?: string; // yes/no

  laboratoryResults?: string;
  examinations?: string;
  hospitalizationTreatment?: string;
  hospitalizationCourse?: string;
  recommendations?: string;
}

export class Dismissal implements IDismissal{
  reasonOfDismissal: string = ''; // done treatment, patient requested, death,...
  dismissingDoctor: string = '';
  treatmentType: string = ''; // medication, operation, infusion, resuscitation, rehabilitation
  numberOfDaysOnICU?: number | null = null;
  gainedComplication: string = '';
  directPayment?: number | null = null;
  relocation?: boolean | null = null; // yes/no
  relocationPlace?: string = '';
  relocationReason?: string = '';
  performedOperation?: boolean | null = null; // yes/no
  death?: boolean | null = null; // yes/no
  deathReason?: string = '';
  dateOfDeath?: Date;
  timeOfDeath?: string = ''; // yes/no

  laboratoryResults?: string;
  examinations?: string;
  hospitalizationTreatment?: string;
  hospitalizationCourse?: string;
  recommendations?: string;


  constructor() {
  }
}
