import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormConfig, FormItemConfig} from "../../../objects/form.config";
import {Hospitalization} from "../../../objects/interfaces/IHospitalization";
import {AuthService} from "../../../services/auth.service";
import {RoomService} from "../../../services/room.service";

@Component({
  selector: 'app-dismissal',
  templateUrl: './dismissal.component.html',
  styleUrls: ['./dismissal.component.scss']
})
export class DismissalComponent implements OnInit, OnChanges {

  @Input() editMode: boolean;
  @Input() hospitalization: Hospitalization;
  public config?: FormConfig;
  public configTextAreas?: FormConfig;
  public activeUser;

  constructor(private authService: AuthService, private roomService: RoomService) {
  }

  ngOnInit(): void {
    this.activeUser = this.authService.getActiveUser();

    this.setConfig();
    this.setConfigTextAreas();
  }

  ngOnChanges(changes: SimpleChanges) {

      if (changes['editMode'].currentValue == false  && this.config && this.configTextAreas) {

      var arrayData: any = {};
      this.config.sections.forEach((section) => {
        section.items.forEach((item) => {
          arrayData[item.id] = item.value;
        });
      });

      this.configTextAreas.sections.forEach((section) => {
        section.items.forEach((item) => {
          arrayData[item.id] = item.value;
        });
      });

      if (this.hospitalization.ongoing === false)
      {
        this.hospitalization.dismissal.dismissingDoctor = this.activeUser.title + " " + this.activeUser.person.firstname + " "
          + this.activeUser.person.lastname;
      }

      this.hospitalization.dismissal.reasonOfDismissal = arrayData['reasonOfDismissal'];
      this.hospitalization.dismissal.relocation = arrayData['relocation'];
      this.hospitalization.dismissal.relocationReason = arrayData['relocationReason'];
      this.hospitalization.dismissal.relocationPlace = arrayData['relocationPlace'];
      this.hospitalization.dismissal.death = arrayData['death'];
      this.hospitalization.dismissal.deathReason = arrayData['deathReason'];
      this.hospitalization.dismissal.timeOfDeath = arrayData['timeOfDeath'];
      this.hospitalization.dismissal.performedOperation = arrayData['performedOperation'];
      this.hospitalization.dismissal.directPayment = arrayData['directPayment'];
      this.hospitalization.dismissal.examinations = arrayData['examinations'];
      this.hospitalization.dismissal.gainedComplication = arrayData['gainedComplication'];
      this.hospitalization.dismissal.hospitalizationCourse = arrayData['hospitalizationCourse'];
      this.hospitalization.dismissal.hospitalizationTreatment = arrayData['hospitalizationTreatment'];
      this.hospitalization.dismissal.laboratoryResults = arrayData['laboratoryResults'];
      this.hospitalization.dismissal.numberOfDaysOnICU = arrayData['numberOfDaysOnICU'];
      this.hospitalization.dismissal.recommendations = arrayData['recommendations'];
      this.hospitalization.dismissal.treatmentType = arrayData['treatmentType'];

      if (this.hospitalization.ongoing === false && this.hospitalization.bed !== null)
      {
        this.roomService.removePatientFromBed(this.hospitalization.bed);
        this.hospitalization.bed = null;
      }

      if (this.hospitalization.dismissal.death === true) {
        this.hospitalization.dismissal.dateOfDeath = new Date(new Date(arrayData['dateOfDeath']));
      }
    }
    this.ngOnInit();
  }

  public setConfig() {

    const formCnfg: FormConfig = {
      sections: [
        {
          name: "",
          items: [
            {
              id: 'reasonOfDismissal',
              label: 'Dôvod prepustenia',
              type: 'text',
              class: '',
              value:  this.hospitalization.dismissal.reasonOfDismissal,
              required: true
            },
            {
              id: 'dismissingDoctor',
              label: 'Prepúšťajúci lekár',
              type: 'text',
              class: '',
              value: this.hospitalization.dismissal.dismissingDoctor,
              required: true
            },
            {
              id: 'treatmentType',
              label: 'Druh vykonanej liečby',
              type: 'text',
              class: '',
              value:  this.hospitalization.dismissal.treatmentType,
              required: true
            },
            {
              id: 'performedOperation',
              label: 'Vykonaná operácia',
              type: 'text',
              class: '',
              value:  this.hospitalization.dismissal.performedOperation,
              required: true
            },
            {
              id: 'numberOfDaysOnICU',
              label: 'Počet dní na JIS',
              type: 'number',
              class: '',
              value:  this.hospitalization.dismissal.numberOfDaysOnICU,
              required: true
            },
            {
              id: 'gainedComplication',
              label: 'Získaná komplikácia pri prepustení',
              type: 'text',
              class: '',
              value:  this.hospitalization.dismissal.gainedComplication,
              required: false
            },
            {
              id: 'directPayment',
              label: 'Priama platba',
              type: 'number',
              class: '',
              value:   this.hospitalization.dismissal.directPayment ,
              required: false
            }
          ]
        },
        {
          name: "",
          items: [
            {
              id: 'relocation',
              label: 'Presun pacienta',
              type: 'checkbox',
              class: '',
              value:  this.hospitalization.dismissal.relocation,
              required: true,
              willDisable: ['relocationPlace', 'relocationReason']
            },
            {
              id: 'relocationPlace',
              label: 'Miesto presunu',
              type: 'select',
              class: '',
              value: this.hospitalization.dismissal.relocationPlace,
              required: true,
              disabled: true
            },
            {
              id: 'relocationReason',
              label: 'Dôvod presunu',
              type: 'text',
              class: '',
              value: this.hospitalization.dismissal.relocationReason,
              required: true,
              disabled: true
            }
          ]
        },
        {
          name: "",
          items: [
            {
              id: 'death',
              label: 'Úmrtie pacienta',
              type: 'checkbox',
              class: '',
              value: this.hospitalization.dismissal.death,
              required: true,
              willDisable: ['deathReason', 'dateOfDeath', 'timeOfDeath']
            },
            {
              id: 'deathReason',
              label: 'Základná príčina smrti',
              type: 'text',
              class: '',
              value: this.hospitalization.dismissal.deathReason,
              required: true,
              disabled: true
            },
            {
              id: 'dateOfDeath',
              label: 'Dátum úmrtia',
              type: 'datepicker',
              class: '',
              value: this.hospitalization.dismissal.dateOfDeath,
              required: true,
              disabled: true
            },
            {
              id: 'timeOfDeath',
              label: 'Čas Úmrtia',
              type: 'timepicker',
              class: '',
              value: this.hospitalization.dismissal.timeOfDeath,
              required: true,
              disabled: true
            }
          ]
        }
      ]
    }

    this.config = formCnfg;
  }

  public setConfigTextAreas() {

    const formCnfg: FormConfig = {
      sections: [
        {
          name: "",
          items: [
            {
              id: 'laboratoryResults',
              label: 'Laboratórne výsledky',
              type: 'textarea',
              class: '',
              value: this.hospitalization.dismissal.laboratoryResults,
              required: true
            },
            {
              id: 'examinations',
              label: 'Vyšetrenia',
              type: 'textarea',
              class: '',
              value: this.hospitalization.dismissal.examinations,
              required: true
            },
            {
              id: 'hospitalizationTreatment',
              label: 'Liečba počas hospitalizácie',
              type: 'textarea',
              class: '',
              value: this.hospitalization.dismissal.hospitalizationTreatment,
              required: true
            },
            {
              id: 'hospitalizationCourse',
              label: 'Priebeh Hospitalizácie',
              type: 'textarea',
              class: '',
              value: this.hospitalization.dismissal.hospitalizationCourse,
              required: true,
            },
            {
              id: 'odporucanie',
              label: 'Odporúčanie',
              type: 'textarea',
              class: '',
              value: this.hospitalization.dismissal.recommendations,
              required: true,
            }
          ]
        }
      ]
    }
    this.configTextAreas = formCnfg;
  }

  changeDisabled(item: FormItemConfig) {
    this.config?.sections.forEach((section) => {
      section.items.forEach((sectionItem) => {
        item.willDisable?.forEach((itemToDisable) => {
          if (sectionItem.id === itemToDisable) {
            sectionItem.disabled = !sectionItem.disabled;
          }
        })

      });
    });
  }
}

