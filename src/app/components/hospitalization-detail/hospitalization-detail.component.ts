import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hospitalization-detail',
  templateUrl: './hospitalization-detail.component.html',
  styleUrls: ['./hospitalization-detail.component.scss']
})
export class HospitalizationDetailComponent implements OnInit {

  editMode: boolean = false;
  buttonValue: string = "Upraviť";
  constructor() {
  }

  ngOnInit(): void {
  }

  switchMode() {
    this.editMode = !this.editMode;
    this.setButtonValue();
  }

  setButtonValue() {
    this.buttonValue = this.editMode ? "Uložiť" : "Upraviť";
  }

}
