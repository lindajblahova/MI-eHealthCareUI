
export interface IAnamnesis {
  personal?: string;
  family?: string;
  work?: string;
  social?: string;
  medical?: string;
  additional?: string;
  gynecological?: string;
}

export class Anamnesis implements IAnamnesis{
  personal?: string = '';
  family?: string = '';
  work?: string = '';
  social?: string = '';
  medical?: string = '';
  additional?: string = '';
  gynecological?: string = '';


  constructor() {
  }
}
