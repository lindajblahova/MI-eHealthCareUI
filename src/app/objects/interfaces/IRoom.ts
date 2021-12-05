
export interface IRoom {
  floor: string;
  roomNumber: string;
  capacity: number | null;
  occupancy: number | null;
  isFull: boolean | null;
  gender:  string;
}

export class Room implements IRoom{
  floor: string = '';
  roomNumber: string = '';
  capacity: number = null;
  occupancy: number = null;
  isFull: boolean | null = null;
  gender:  string = '';

  constructor() {
  }
}

