import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormConfig} from "../../../objects/form.config";
import {Hospitalization} from "../../../objects/interfaces/IHospitalization";

@Component({
  selector: 'app-anamnesis',
  templateUrl: './anamnesis.component.html',
  styleUrls: ['./anamnesis.component.scss']
})
export class AnamnesisComponent implements OnInit, OnChanges {

  public config?: FormConfig;

  @Input() editMode: boolean ;
  @Input() hospitalization: Hospitalization;

  constructor() {
  }

  ngOnInit(): void {
    this.setConfig();
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes['editMode'].currentValue == false && this.config) {

      var arrayData: any = {};
      this.config.sections.forEach((section) => {
        section.items.forEach((item) => {
          arrayData[item.id] = item.value;
        });
      });
      console.log(arrayData);

      this.hospitalization.anamnesis.personal = arrayData['personal'];
      this.hospitalization.anamnesis.social = arrayData['social'];
      this.hospitalization.anamnesis.family = arrayData['family'];
      this.hospitalization.anamnesis.medical = arrayData['medical'];
      this.hospitalization.anamnesis.work = arrayData['work'];
      this.hospitalization.anamnesis.additional = arrayData['additional'];
      this.hospitalization.anamnesis.gynecological = arrayData['gynecological'];

    }
  }

  public setConfig() {

    const formCnfg: FormConfig = {
      sections: [
        {
          name: "",
          items: [
            {
              id: 'personal',
              label: 'Osobná',
              type: 'textarea',
              class: '',
              value: this.hospitalization.anamnesis.personal,
              required: true
            },
            {
              id: 'family',
              label: 'Rodinná',
              type: 'textarea',
              class: '',
              value: this.hospitalization.anamnesis.family,
              required: true
            },
            {
              id: 'work',
              label: 'Pracovná',
              type: 'textarea',
              class: '',
              value: this.hospitalization.anamnesis.work,
              required: true
            },
            {
              id: 'social',
              label: 'Sociálna',
              type: 'textarea',
              class: '',
              value: this.hospitalization.anamnesis.social,
              required: true
            },
            {
              id: 'medical',
              label: 'Lieková',
              type: 'textarea',
              class: '',
              value: this.hospitalization.anamnesis.medical,
              required: true
            },
            {
              id: 'additional',
              label: 'Doplnková',
              type: 'textarea',
              class: '',
              value: this.hospitalization.anamnesis.additional,
              required: true
            },
            {
              id: 'gynecological',
              label: 'Gynekologická',
              type: 'textarea',
              class: '',
              value: this.hospitalization.anamnesis.gynecological,
              required: true
            }
          ]
        }
      ]
    }

    this.config = formCnfg;
  }

}
