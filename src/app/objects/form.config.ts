
export interface FormConfig {
  sections: FormSectionConfig[];
}

export interface FormSectionConfig {
  name: string;
  items: FormItemConfig[];
}

export interface FormItemConfig {
  id?: string;
  label?: string;
  type?: 'text' | 'number' | 'datepicker' | 'select' | 'checkbox' | 'autocomplete' |
    'multiSelect' | 'textarea' | 'autocompleteSelect' | 'timepicker';
  class: string;
  value?: any;
  required?: boolean;
  disabled?: boolean;
  willDisable?: string[]
}


