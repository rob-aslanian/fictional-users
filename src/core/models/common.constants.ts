import { Control } from 'react-hook-form';

export enum ActionState {
  ADD = 'ADD',
  EDIT = 'EDIT',
}

export interface ICountry {
  id: string;
  name: string;
}

export interface IInputProps {
  control: Control;
  name: string;
}
