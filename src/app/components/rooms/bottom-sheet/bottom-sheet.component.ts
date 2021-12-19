import {Component, Inject, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {HospitalizationService} from "../../../services/hospitalization.service";
import {Hospitalization, IHospitalization} from "../../../objects/interfaces/IHospitalization";

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent implements OnInit {

  hospitalizations: IHospitalization[] = new Array<Hospitalization>(this.data.room.capacity, null);
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
              private hospitalizationService: HospitalizationService) {

    this.data.roomBeds.forEach((bed,index) => {
      var found = this.hospitalizationService.getHospitalizationByBed(bed);
      if (found !== undefined)
      {
        this.hospitalizations[index] = found;
      }

    })
  }

  ngOnInit(): void {
  }

}
