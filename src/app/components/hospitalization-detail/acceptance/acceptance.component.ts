import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {FormConfig, FormItemConfig} from "../../../objects/form.config";
import {MatSort, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatTableDataSource} from "@angular/material/table";
import {Hospitalization} from "../../../objects/interfaces/IHospitalization";


@Component({
  selector: 'app-acceptance',
  templateUrl: './acceptance.component.html',
  styleUrls: ['./acceptance.component.scss']
})
export class AcceptanceComponent implements OnInit,OnChanges {

  @Input() editMode: boolean;
  @Input() hospitalization: Hospitalization;
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  public config?: FormConfig;
  public configTextAreas?: FormConfig;

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  ngOnInit(): void {
    this.setConfig();
    this.setConfigTextAreas();
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes['editMode'].currentValue == false && this.config && this.configTextAreas) {

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
      console.log(arrayData);

      this.hospitalization.acceptance.acceptingDoctor = arrayData['acceptingDoctor'];
      this.hospitalization.acceptance.type = arrayData['type'];
      this.hospitalization.acceptance.condition = arrayData['condition'];
      this.hospitalization.acceptance.nursingDoctor = arrayData['nursingDoctor'];
      this.hospitalization.acceptance.recommendedBy = arrayData['recommendedBy'];
      this.hospitalization.acceptance.diagnose = arrayData['diagnose'];
      this.hospitalization.acceptance.operationCode = arrayData['operationCode'];
      this.hospitalization.acceptance.allergies = arrayData['allergies'];
      this.hospitalization.acceptance.conclusion = arrayData['conclusion'];
      this.hospitalization.acceptance.currentDiagnoses = arrayData['currentDiagnoses'];
      this.hospitalization.acceptance.medicalFinding = arrayData['medicalFinding'];
      this.hospitalization.acceptance.patientCondition = arrayData['patientCondition'];
      this.hospitalization.acceptance.wasRecommended = arrayData['wasRecommended'];
      this.hospitalization.acceptance.plannedOperation = arrayData['plannedOperation'];

    }
  }

  public setConfig() {

    const formCnfg: FormConfig = {
      sections: [
        {
          name: "",
          items: [
            {
              id: 'type',
              label: 'Typ hospitalizácie',
              type: 'text',
              class: '',
              value: this.hospitalization.acceptance.type,
              required: true
            },
            {
              id: 'acceptingDoctor',
              label: 'Prijímajúci lekár',
              type: 'text',
              class: '',
              value: this.hospitalization.acceptance.acceptingDoctor,
              required: true
            },
            {
              id: 'nursingDoctor',
              label: 'Ošetrujúci lekár',
              type: 'text',
              class: '',
              value: this.hospitalization.acceptance.nursingDoctor,
              required: true
            },
            {
              id: 'wasRecommended',
              label: 'Odporúčané prijatie',
              type: 'checkbox',
              class: '',
              value: this.hospitalization.acceptance.wasRecommended,
              required: true,
              willDisable: ['recommendedBy']
            },
            {
              id: 'recommendedBy',
              label: 'Odporučil lekár',
              type: 'text',
              class: '',
              value: this.hospitalization.acceptance.recommendedBy,
              required: true,
              disabled: !this.hospitalization.acceptance.wasRecommended
            }
          ]
        },
        {
          name: "",
          items: [
            {
              id: 'diagnose',
              label: 'Prijímová diagnóza',
              type: 'text',
              class: '',
              value: this.hospitalization.diagnose.idDiagnose + ' ' + this.hospitalization.diagnose.diagnoseName,
              required: true
            },
            {
              id: 'condition',
              label: 'Stav Pacienta',
              type: 'number',
              class: '',
              value: this.hospitalization.acceptance.condition,
              required: true
            },
            {
              id: 'plannedOperation',
              label: 'Plánovaný výkon',
              type: 'select',
              class: '',
              value: this.hospitalization.acceptance.plannedOperation,
              required: true
            },
            {
              id: 'operationCode',
              label: 'Výkon',
              type: 'text',
              class: '',
              value: this.hospitalization.acceptance.operationCode,
              required: true
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
              id: 'allergies',
              label: 'Alergie a dôležité upozornenia',
              type: 'textarea',
              class: '',
              value: this.hospitalization.acceptance.allergies,
              required: true
            },
            {
              id: 'currentDiagnoses',
              label: 'Terajšie ochorenia',
              type: 'textarea',
              class: '',
              value: this.hospitalization.acceptance.currentDiagnoses,
              required: true
            },
            {
              id: 'medicalFinding',
              label: 'Objektívny nález',
              type: 'textarea',
              class: '',
              value:  this.hospitalization.acceptance.medicalFinding,
              required: true
            },
            {
              id: 'conclusion',
              label: 'Zhrnutie',
              type: 'textarea',
              class: '',
              value: this.hospitalization.acceptance.conclusion,
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
