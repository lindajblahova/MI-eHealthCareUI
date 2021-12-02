
export interface ListConfig {
  id: string;
  items: ListItemConfig[];
}

export interface ListItemConfig {
  id: string;
  label?: string;
  class: string;
  value: any;
}
