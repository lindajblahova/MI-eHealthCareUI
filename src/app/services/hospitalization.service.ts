import {Injectable} from "@angular/core";
import {IHospitalization} from "../objects/interfaces/IHospitalization";
import {IDismissal} from "../objects/interfaces/IDismissal";
import {IAcceptance} from "../objects/interfaces/IAcceptance";
import {IAnamnesis} from "../objects/interfaces/IAnamnesis";
import {IPatient} from "../objects/interfaces/IPatient";
import {PatientService} from "./patient.service";
import {DiagnoseService} from "./diagnose.service";
import {RoomService} from "./room.service";
import {IBed} from "../objects/interfaces/IRoom";
import * as moment from "moment";
import {Patient} from "../objects/interfaces/IPatient";

@Injectable({
  providedIn: 'root'
})
export class HospitalizationService {

  private anamneses: IAnamnesis[] = [
    {
      personal: 'chudokrvnosť',
      family: 'Starí rodiča kardiovaskulárne ochorenia',
      work: '',
      social: '',
      medical: 'železo 1x1 14mg',
      additional: '',
      gynecological: ''
    },
    {
      personal: 'cievne ochorenia, nespavosť',
      family: 'Rodiča kardiovaskulárne ochorenia',
      work: 'nemôže vykonávať prácu v noci',
      social: '',
      medical: 'magnerot 2x2 500mg, zopiclon 1x1 7,5mg',
      additional: '',
      gynecological: ''
    }
  ];

  private acceptances: IAcceptance[] = [
    {
      type: 'akútny',
      acceptingDoctor: 'MUDr. Rastislav Mika',
      nursingDoctor: 'MUDr. Rastislav Mika',
      wasRecommended: false,
      diagnose: this.diagnoseService.getAllDiagnoses()[3],
      patientCondition: 'normálny',
      plannedOperation: false,

      allergies: 'prach, pele',
      medicalFinding: 'zlomenina pravého členka',
      conclusion: 'hospitalizacia na par dni, medikacie od bolesti'
    },
    {
      type: 'planovany',
      acceptingDoctor: 'MUDr. Rastislav Mika',
      nursingDoctor: 'MUDr. Vojtech Koleják',
      wasRecommended: true,
      recommendedBy: 'MUDr. Ján Papan',
      diagnose: this.diagnoseService.getAllDiagnoses()[1],
      patientCondition: 'normálny',
      plannedOperation: true,
      operationCode: '8539 Operácia varixov dolných končatín',

      medicalFinding: 'varixy na lavom predkoleni, povrchovy zapal zil',
    },
  ];

  private dismissals: IDismissal[] = [
    {
      reasonOfDismissal: '',
      dismissingDoctor: '',
      treatmentType: '',
      gainedComplication: '',
    },
    {
      reasonOfDismissal: 'ukončenie liečby',
      dismissingDoctor: 'MUDr. Vojtech Koleják',
      treatmentType: 'iná',
      numberOfDaysOnICU: 0,
      gainedComplication: '',
      directPayment: 0,
      relocation: false,
      performedOperation: false,
      death: false,

      laboratoryResults: 'Odstránenie varixov, žiadne ťažkosti',
      examinations: 'Vyšetrenie cievym lekárom - MUDr. Ján Haluška\nžiadne ďalšie nálezy. ko. o 2t',
      hospitalizationTreatment: 'Detralex 500mg 2x1',
      hospitalizationCourse: 'bez komplikácií',
      recommendations: 'sťahovacie podkolienky, vyšetrenie cievym lekárom'
    }
  ];
  private hospitalizations: IHospitalization[] = [
    {
      idHospitalization: '8521673',
      patient: this.patientService.getAllPatients()[0],
      dateFrom: new Date('05/17/2018'),
      timeFrom: '09:15',
      dateTo: new Date(0),
      timeTo: '',
      ongoing: true,
      diagnose: this.diagnoseService.getAllDiagnoses()[2],

      bed: this.roomService.getAllBeds()[8],

      anamnesis: this.anamneses[0],
      acceptance: this.acceptances[0],
      dismissal:  this.dismissals[0],
    },
    {
      idHospitalization: '7451289',
      patient: this.patientService.getAllPatients()[1],
      dateFrom:  new Date('04/14/2021'),
      timeFrom: '10:38',
      dateTo: new Date('04/16/2021'),
      timeTo: '08:05',
      ongoing: false,
      diagnose: this.diagnoseService.getAllDiagnoses()[1],

      bed: null,

      anamnesis: this.anamneses[1],
      acceptance: this.acceptances[1],
      dismissal:  this.dismissals[1],
    },
  ];

  constructor(private patientService: PatientService, private diagnoseService: DiagnoseService, private roomService: RoomService) { }

  public getAllHospitalizations(): IHospitalization[] {
    return this.hospitalizations;
  }

  public getAllCurrentHospitalizations(): IHospitalization[] {
    return this.hospitalizations.filter(hospitalization => hospitalization.ongoing = true);
  }

  public getHospitalization(idHospitalization: string): IHospitalization {
    return this.hospitalizations.find(hospitalization => hospitalization.idHospitalization === idHospitalization);
  }

  public saveHospitalization(hospitalization: IHospitalization): void {
    this.hospitalizations.push(hospitalization);
    console.log(this.hospitalizations) ;
  }

  public saveExistingHospitalization(hospitalization: IHospitalization): void {
    var oldHospitalization = this.hospitalizations.find(hosp => hosp.idHospitalization === hospitalization.idHospitalization);
    oldHospitalization.bed = hospitalization.bed;
    oldHospitalization.ongoing = hospitalization.ongoing;
    oldHospitalization.acceptance = hospitalization.acceptance;
    oldHospitalization.anamnesis = hospitalization.anamnesis;
    oldHospitalization.dismissal = hospitalization.dismissal;
    oldHospitalization.dateFrom = hospitalization.dateFrom;
    oldHospitalization.dateTo = hospitalization.dateTo;
    oldHospitalization.timeFrom = hospitalization.timeFrom;
    oldHospitalization.timeTo = hospitalization.timeTo;

  }

  public getHospitalizationByBed(bed: IBed): IHospitalization | undefined {
    return this.hospitalizations.find(hospitalization => hospitalization.bed === bed && hospitalization.ongoing === true);
  }

  public currentlyNonHospitalizedPatients()
  {
    var hospitalized: any = [];

    this.hospitalizations.forEach(hosp => {
      if (hosp.ongoing === true)
        hospitalized.push(hosp.patient);
    })

    var nonhospitalized = this.patientService.getAllPatients().filter(item => hospitalized.indexOf(item) < 0);
    console.log(nonhospitalized);

    return nonhospitalized;
  }
}
