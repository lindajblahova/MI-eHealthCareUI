import { Component, OnInit } from '@angular/core';
import {MatTableFilter} from "mat-table-filter";
import {IRoom, Room} from "../../objects/interfaces/IRoom";
import {MatTableDataSource} from "@angular/material/table";
import {IHospitalization, TableColumn} from "../hospitalizations/hospitalizations.component";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {BottomSheetComponent} from "./bottom-sheet/bottom-sheet.component";
import {FormConfig, FormItemConfig} from "../../objects/form.config";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  data: Room[] = [
    {
      floor: '1',
      roomNumber: '1',
      capacity: 4,
      occupancy: 3,
      isFull: false,
      gender: 'mužská'
    },
    {
      floor: '1',
      roomNumber: '2',
      capacity: 4,
      occupancy: 2,
      isFull: false,
      gender: 'mužská'
    },
    {
      floor: '1',
      roomNumber: '3',
      capacity: 4,
      occupancy: 4,
      isFull: true,
      gender: 'mužská'
    },
    {
      floor: '1',
      roomNumber: '4',
      capacity: 4,
      occupancy: 0,
      isFull: false,
      gender: 'mužská'
    },
    {
      floor: '2',
      roomNumber: '1',
      capacity: 4,
      occupancy: 4,
      isFull: true,
      gender: 'ženská'
    },
    {
      floor: '2',
      roomNumber: '2',
      capacity: 4,
      occupancy: 2,
      isFull: false,
      gender: 'ženská'
    },
    {
      floor: '2',
      roomNumber: '3',
      capacity: 4,
      occupancy: 0,
      isFull: false,
      gender: 'ženská'
    },
    {
      floor: '2',
      roomNumber: '4',
      capacity: 4,
      occupancy: 1,
      isFull: false,
      gender: 'ženská'
    }
  ];

  dataSource = new MatTableDataSource(this.data);
  clickedButton: number = 2;
  filterEntity: Room = new Room();
  filterType: MatTableFilter = MatTableFilter.ANYWHERE;
  displayedColumns: TableColumn[] = [
    {
      id: 'floor',
      label: 'Poschodie'
    },
    {
      id: 'roomNumber',
      label: 'Číslo izby'
    },
    {
      id: 'capacity',
      label: 'Kapacita'
    },
    {
      id: 'occupancy',
      label: 'Obsadenosť'
    },
    {
      id: 'gender',
      label: 'Typ izby'
    }

  ];
  displayedCols: string[] = ['floor', 'roomNumber', 'capacity', 'occupancy', 'gender'];
  public config?: FormConfig;

  constructor(private _bottomSheet: MatBottomSheet) {}

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
              id: 'floor',
              label: 'Poschodie',
              type: 'text',
              class: '',
              value: '',
              required: false
            },
            {
              id: 'roomNumber',
              label: 'Číslo izby',
              type: 'text',
              class: '',
              value: '',
              required: false
            },
            {
              id: 'capacity',
              label: 'Kapacita',
              type: 'text',
              class: '',
              value: '',
              required: false
            },
            {
              id: 'occupancy',
              label: 'Obsadenosť',
              type: 'text',
              class: '',
              value: '',
              required: false
            },
            {
              id: 'gender',
              label: 'Typ izby',
              type: 'text',
              class: '',
              value: '',
              required: false
            }
          ]
        }
      ]
    }

    this.config = formCnfg;
  }

  changeRoomType(id: number) {

    this.clickedButton = id;
    switch (this.clickedButton) {
      case 1:
        this.filterEntity.isFull = false;
        break;
      case 2:
        this.filterEntity.isFull = null;
        break;
    }
  }

  filterTable(item: FormItemConfig) {

    switch (item.id) {
      case 'floor':
        this.filterEntity.floor = item.value;
        break;
      case 'roomNumber':
        this.filterEntity.roomNumber = item.value;
        break;
      case 'capacity':
        this.filterEntity.capacity = item.value;
        break;
      case 'occupancy':
        this.filterEntity.occupancy = item.value;
        break;
      case 'gender':
        this.filterEntity.gender = item.value;
        break;
    }

  }

  openBottomSheet(room: Room): void {
    this._bottomSheet.open(BottomSheetComponent, {
      data: { room },
    });
  }

}
