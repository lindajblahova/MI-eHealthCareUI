import { Injectable } from '@angular/core';
import {Bed, IBed, IRoom, Room} from "../objects/interfaces/IRoom";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  rooms: Room[] = [
    {
      roomNumber: '101',
      capacity: 4,
      occupancy: 0,
      isFull: false,
      gender: 'mužské',
    },
    {
      roomNumber: '102',
      capacity: 4,
      occupancy: 0,
      isFull: false,
      gender: 'mužské',
    },
    {
      roomNumber: '201',
      capacity: 4,
      occupancy: 1,
      isFull: false,
      gender: 'ženské',
    },
    {
      roomNumber: '202',
      capacity: 4,
      occupancy: 0,
      isFull: false,
      gender: 'ženské',
    },
  ];

  beds: Bed[] = [
    {
      bedNumber: 'A1',
      isFree: true,
      room: this.rooms[0]
    },
    {
      bedNumber: 'A2',
      isFree: true,
      room: this.rooms[0]
    },
    {
      bedNumber: 'A3',
      isFree: true,
      room: this.rooms[0]
    },
    {
      bedNumber: 'A4',
      isFree: true,
      room: this.rooms[0]
    },
    {
      bedNumber: 'A1',
      isFree: true,
      room: this.rooms[1]
    },
    {
      bedNumber: 'A2',
      isFree: true,
      room: this.rooms[1]
    },
    {
      bedNumber: 'A3',
      isFree: true,
      room: this.rooms[1]
    },
    {
      bedNumber: 'A4',
      isFree: true,
      room: this.rooms[1]
    },
    {
      bedNumber: 'A1',
      isFree: false,
      room: this.rooms[2]
    },
    {
      bedNumber: 'A2',
      isFree: true,
      room: this.rooms[2]
    },
    {
      bedNumber: 'A3',
      isFree: true,
      room: this.rooms[2]
    },
    {
      bedNumber: 'A4',
      isFree: true,
      room: this.rooms[2]
    },
    {
      bedNumber: 'A1',
      isFree: true,
      room: this.rooms[3]
    },
    {
      bedNumber: 'A2',
      isFree: true,
      room: this.rooms[3]
    },
    {
      bedNumber: 'A3',
      isFree: true,
      room: this.rooms[3]
    },
    {
      bedNumber: 'A4',
      isFree: true,
      room: this.rooms[3]
    }
  ];

  constructor() { }

  public getAllBeds(): Bed[] {
    return this.beds;
  }

  public getAllFreeBeds(): Bed[] {
    return this.beds.filter(bed => bed.isFree === true);
  }

  public getFreeRoomsByGender(gender: string): Room[] {
    return this.rooms.filter(room => room.isFull === false && room.gender === gender);
  }

  public getAllRooms(): Room[] {
    return this.rooms;
  }

  public getRoomBeds(room: IRoom): IBed[] {
    return this.beds.filter(bed => bed.room === room);
  }

  public getRoomFreeBeds(room: IRoom): IBed[] {
    return this.beds.filter(bed => bed.room === room && bed.isFree === true);
  }

  public addPatientToBed(bed: Bed)
  {
    var bedFound = this.beds.find(b => b.bedNumber === bed.bedNumber && b.room === bed.room);
    bedFound.isFree = false;
    bedFound.room.occupancy++;
    if (bedFound.room.occupancy === bedFound.room.capacity)
    {
      bedFound.room.isFull = true;
    }
  }

  public removePatientFromBed(bed: Bed)
  {
    var bedFound = this.beds.find(b => b.bedNumber === bed.bedNumber && b.room === bed.room);

    bedFound.isFree = true;
    bedFound.room.occupancy--;
    if (bedFound.room.occupancy !== bedFound.room.capacity)
    {
      bedFound.room.isFull = false;
    }
  }
}
