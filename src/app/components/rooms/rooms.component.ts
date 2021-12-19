import { Component, OnInit } from '@angular/core';
import {MatTableFilter} from "mat-table-filter";
import {Bed, IBed, IRoom, Room} from "../../objects/interfaces/IRoom";
import {MatTableDataSource} from "@angular/material/table";
import { TableColumn} from "../hospitalizations/hospitalizations.component";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {BottomSheetComponent} from "./bottom-sheet/bottom-sheet.component";
import {FormConfig, FormItemConfig} from "../../objects/form.config";
import {RoomService} from "../../services/room.service";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  rooms: IRoom[];
  dataSource: MatTableDataSource<any>;
  clickedButton: number = 2;
  filterEntity: IRoom = new Room();
  filterType: MatTableFilter = MatTableFilter.ANYWHERE;
  displayedColumns: TableColumn[] = [
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
  displayedCols: string[] = ['roomNumber', 'capacity', 'occupancy', 'gender'];
  public config?: FormConfig;

  constructor(private _bottomSheet: MatBottomSheet, private roomService: RoomService) {
    this.rooms = this.roomService.getAllRooms();
  }

  findColumnValue = (element:unknown, column:string):string => <string>column.split('.').reduce((acc, cur) => acc[cur], element);

  ngOnInit(): void {
    this.setConfig();
    this.dataSource = new MatTableDataSource(this.rooms);
  }

  public setConfig() {

    const formCnfg: FormConfig = {
      sections: [
        {
          name: "",
          items: [
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
    var roomBeds = this.roomService.getRoomBeds(room);
    this._bottomSheet.open(BottomSheetComponent, {
      data: { room, roomBeds },
    });
  }

}
