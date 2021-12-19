import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Hospitalization} from "../../objects/interfaces/IHospitalization";
import {HospitalizationService} from "../../services/hospitalization.service";
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-hospitalization-detail',
  templateUrl: './hospitalization-detail.component.html',
  styleUrls: ['./hospitalization-detail.component.scss']
})
export class HospitalizationDetailComponent implements OnInit {

  editMode: boolean = false;
  buttonValue: string = "Upraviť";
  public hospitalization: Hospitalization;
  private id: string =this.activatedRoute.snapshot.paramMap.get("id");

  constructor(private activatedRoute: ActivatedRoute, private hospitalizationService: HospitalizationService,
              private sharedService: SharedService) {
    this.id=this.activatedRoute.snapshot.paramMap.get("id");

    this.hospitalization = this.hospitalizationService.getHospitalization(this.id);
    this.sharedService.loading = false;
  }

  ngOnInit(): void {
  }

  endHospitalization() {
    this.hospitalization.ongoing = false;
    this.switchMode();
  }

  switchMode() {
    this.editMode = !this.editMode;
    this.setButtonValue();
    if (this.editMode === false)
    {
      this.hospitalizationService.saveExistingHospitalization(this.hospitalization);
    }
  }

  setButtonValue() {
    this.buttonValue = this.editMode ? "Uložiť" : "Upraviť";
  }

}
