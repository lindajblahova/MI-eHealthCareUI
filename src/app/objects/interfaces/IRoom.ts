import {IHospitalization} from "./IHospitalization";

export interface IRoom {
  roomNumber: string;
  capacity: number | null;
  occupancy: number | null;
  isFull: boolean | null;
  gender:  string;
}

export class Room implements IRoom{
  roomNumber: string = '';
  capacity: number = null;
  occupancy: number = null;
  isFull: boolean | null = null;
  gender:  string = '';
}

export interface IBed {
  room: IRoom;
  bedNumber: string;
  isFree: boolean;
}

export class Bed implements IBed {
  room: IRoom;
  bedNumber: string = '';
  isFree: boolean = false;

  constructor(room: IRoom) {
    this.room = room;
  }
}

