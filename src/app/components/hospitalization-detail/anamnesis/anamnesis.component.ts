import {Component, Input, OnInit} from '@angular/core';
import {FormConfig} from "../../../objects/form.config";

@Component({
  selector: 'app-anamnesis',
  templateUrl: './anamnesis.component.html',
  styleUrls: ['./anamnesis.component.scss']
})
export class AnamnesisComponent implements OnInit {

  public config?: FormConfig;

  @Input() editMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.setConfig();
  }

  public setConfig() {

    const formCnfg: FormConfig = {
      sections: [
        {
          name: "",
          items: [
            {
              id: 'osobna',
              label: 'Osobná',
              type: 'textarea',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'rodinna',
              label: 'Rodinná',
              type: 'textarea',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'pracovna',
              label: 'Pracovná',
              type: 'textarea',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'socialna',
              label: 'Sociálna',
              type: 'textarea',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'liekova',
              label: 'Lieková',
              type: 'textarea',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'doplnkova',
              label: 'Doplnková',
              type: 'textarea',
              class: '',
              value: '',
              required: true
            },
            {
              id: 'gynekologicka',
              label: 'Gynekologická',
              type: 'textarea',
              class: '',
              value: '',
              required: true
            }
          ]
        }
      ]
    }

    this.config = formCnfg;
  }

}
