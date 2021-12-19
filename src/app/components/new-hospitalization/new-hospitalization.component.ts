import { Component, OnInit } from '@angular/core';
import {FormConfig, FormItemConfig} from "../../objects/form.config";
import {IPatient, Patient} from "../../objects/interfaces/IPatient";
import {PatientService} from "../../services/patient.service";
import {DiagnoseService} from "../../services/diagnose.service";
import {Diagnose, IDiagnose} from "../../objects/interfaces/IDiagnose";
import {RoomService} from "../../services/room.service";
import {Bed, IBed, Room} from "../../objects/interfaces/IRoom";
import {Person} from "../../objects/interfaces/IPerson";
import {Hospitalization} from "../../objects/interfaces/IHospitalization";
import {IAnamnesis} from "../../objects/interfaces/IAnamnesis";
import {IAcceptance} from "../../objects/interfaces/IAcceptance";
import {IDismissal} from "../../objects/interfaces/IDismissal";
import {HospitalizationService} from "../../services/hospitalization.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {IDoctor} from "../../objects/interfaces/IDoctor";

@Component({
  selector: 'app-new-hospitalization',
  templateUrl: './new-hospitalization.component.html',
  styleUrls: ['./new-hospitalization.component.scss']
})
export class NewHospitalizationComponent implements OnInit {

  public config?: FormConfig;

  patients: Patient[];
  diagnoses: Diagnose[];
  beds: Bed[];
  freeGenderRooms: Room[];
  filteredPatients: Patient[] = [];
  filteredDiagnoses: Diagnose[] = [];
  filteredRooms: Room[] = [];

  chosenPatient: Patient;
  chosenRoom: Room;
  chosenBed: Bed;
  chosenDiagnose: Diagnose;

  acceptingDoctor: IDoctor;

  constructor(private patientService: PatientService, private diagnoseService: DiagnoseService,
              private roomService: RoomService, private hospitalizationService: HospitalizationService,
              private router: Router, private authService: AuthService) {
    this.patients = this.hospitalizationService.currentlyNonHospitalizedPatients();
    this.diagnoses = this.diagnoseService.getAllDiagnoses();
    this.acceptingDoctor = this.authService.getActiveUser();
  }

  ngOnInit(): void {
    this.setConfig();
  }

  public setConfig() {

    const formCnfg: FormConfig = {
      sections: [
        {
          name: "Pacient",
          items: [
            {
              id: 'firstnameLastname',
              label: 'Meno a priezvisko',
              type: 'autocompleteSelect',
              class: '',
              value: this.chosenPatient,
              options: this.filteredPatients,
              required: true
            }
          ]
        },
        {
          name: "Trvanie hospitalizácie",
          items: [
            {
              id: 'dateFrom',
              label: 'Dátum od',
              type: 'datepicker',
              class: '',
              value: null,
              required: true
            },
            {
              id: 'timeFrom',
              label: 'Čas od',
              type: 'timepicker',
              class: '',
              value: null,
              required: true
            }
          ]
        },
        {
          name: "",
          items: [
            {
              id: 'dateTo',
              label: 'Dátum do',
              type: 'datepicker',
              class: '',
              value: null,
              required: true,
              disabled: false
            },
            {
              id: 'timeTo',
              label: 'Čas do',
              type: 'timepicker',
              class: '',
              value: null,
              required: true
            },
            {
              id: 'ongoing',
              label: 'Prebiehajúca',
              type: 'checkbox',
              class: '',
              value: '',
              required: false,
              willDisable: ['dateTo', 'timeTo']
            }
          ]
        },
        {
          name: "Hospitalizácia",
          items: [
            {
              id: 'acceptingDoctor',
              label: 'Prijímajúci lekar',
              type: 'text',
              class: '',
              value: this.acceptingDoctor.title + " " + this.acceptingDoctor.person.firstname + " " + this.acceptingDoctor.person.lastname ,
              required: false
            },
            {
              id: 'diagnose',
              label: 'Diagnóza',
              type: 'autocompleteSelect',
              class: '',
              options: this.diagnoses,
              required: true
            },
            {
              id: 'room',
              label: 'Izba',
              type: 'autocompleteSelect',
              class: '',
              value: '',
              options: this.filteredRooms,
              required: false
            },
            {
              id: 'bed',
              label: 'Lôžko',
              type: 'select',
              class: '',
              value: '',
              options: this.beds,
              required: false
            }
          ]
        },
      ]
    }

    this.config = formCnfg;
  }

  changeDisabled(item: FormItemConfig)
  {
    this.config?.sections.forEach((section) => {
      section.items.forEach((sectionItem) => {
        item.willDisable?.forEach((itemToDisable) => {
          if (sectionItem.id === itemToDisable)
          {
            sectionItem.disabled = !sectionItem.disabled;
          }
        } )
      });
    });
  }

  getAvailableRooms() {
    this.freeGenderRooms = this.roomService.getFreeRoomsByGender(this.chosenPatient.person.sex);
  }

  getAvailableRoomBeds() {
    this.beds = this.roomService.getRoomFreeBeds(this.chosenRoom);
  }

  filterRooms(event : string) {
    this.filteredRooms = [];
    this.freeGenderRooms.forEach(value => {
      if ((value.roomNumber.toLowerCase().indexOf(event.toLowerCase()) > -1)) {
        this.filteredRooms.push(value);
      }
    })
  }

  filterPatients(event : string) {
    this.filteredPatients = [];
    this.patients.forEach(value => {
      if ((value.person.firstname.toLowerCase().indexOf(event.toLowerCase()) > -1) ||
        (value.person.lastname.toLowerCase().indexOf(event.toLowerCase()) > -1) ||
        (value.person.identificationNumber.toLowerCase().indexOf(event.toLowerCase()) > -1)) {
        this.filteredPatients.push(value);
      }
    })
  }

  filterDiagnoses(event : string) {
    this.filteredDiagnoses = [];
    this.diagnoses.forEach(value => {
      if ((value.idDiagnose.toLowerCase().indexOf(event.toLowerCase()) > -1) ||
        (value.diagnoseName.toLowerCase().indexOf(event.toLowerCase()) > -1)) {
        this.filteredDiagnoses.push(value);
      }
    })
  }

  public loadData() {
    var arrayData: any = {};

    this.config.sections.forEach((section) => {
      section.items.forEach((item) => {
        arrayData[item.id] = item.value;
      });
    });

    var newAnamnesis: IAnamnesis = {
      personal: '',
    }

    var newAcceptance: IAcceptance = {
      type: '',
      acceptingDoctor: arrayData['acceptingDoctor'],
      nursingDoctor: '',
      wasRecommended: false,
      diagnose: this.chosenDiagnose,
      patientCondition: '',
      plannedOperation: false
    }

    var newDismissal: IDismissal = {
      reasonOfDismissal: '',
      dismissingDoctor:'',
      treatmentType: '',
      gainedComplication: '',
    }

    var newHospitalization: Hospitalization = {
      idHospitalization: this.getRandomID().toString(),
      patient: this.chosenPatient,
      dateFrom: new Date(arrayData['dateFrom']),
      timeFrom: arrayData['timeFrom'],
      ongoing: arrayData['ongoing'],
      dateTo:  arrayData['ongoing'] === false ? new Date(arrayData['dateTo']) : new Date(0),
      timeTo: arrayData['timeTo'],
      diagnose: this.chosenDiagnose,
      bed: this.chosenBed,

      anamnesis: newAnamnesis,
      acceptance: newAcceptance,
      dismissal: newDismissal
    }

    this.roomService.addPatientToBed(this.chosenBed);
    console.log(newHospitalization);
    this.hospitalizationService.saveHospitalization(newHospitalization);

    this.navigateTo(newHospitalization.idHospitalization);
  }

  public navigateTo(idHospitalization: string)
  {
    this.router.navigate(['/hospitalization/' + idHospitalization]);
  }

  private getRandomID() {
    return Math.floor(Math.random() * 99999999 ); // Number.MAX_SAFE_INTEGER
  }
}
