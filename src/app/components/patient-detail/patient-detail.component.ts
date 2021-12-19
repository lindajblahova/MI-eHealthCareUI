import {Component, OnInit} from '@angular/core';
import {Patient} from "../../objects/interfaces/IPatient";
import {ActivatedRoute} from "@angular/router";
import {PatientService} from "../../services/patient.service";
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent implements OnInit {

  public patient: Patient;
  private id: string = this.activatedRoute.snapshot.paramMap.get("id");

  constructor(private activatedRoute: ActivatedRoute, private patientService: PatientService, private sharedService: SharedService) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");

    this.patient = this.patientService.getPatient(this.id);
    this.sharedService.loading = false;
  }

  ngOnInit(): void {

  }

}
