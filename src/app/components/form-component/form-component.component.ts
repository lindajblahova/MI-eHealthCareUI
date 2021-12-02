import {Component, Input, OnInit, Output} from '@angular/core';
import {FormConfig, FormItemConfig} from "../../objects/form.config";

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent implements OnInit {

  @Input() config?: FormConfig;

  @Input() array?: any[] = [];
  @Output() filteredArray: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
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

  filterArray(event : string) {
    this.filteredArray = [];
    this.array?.forEach(value => {
      if (value.toLowerCase().indexOf(event.toLowerCase()) > -1) {
        this.filteredArray.push(value);
      }
    })
  }

}
