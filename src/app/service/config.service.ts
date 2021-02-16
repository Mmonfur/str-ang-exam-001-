import { Injectable } from '@angular/core';

export interface ITableCol {
  key: string;
  text: string;
  editable: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  tableCols: ITableCol[] = [
    {key: 'id', text: '#', editable: false},
    {key: 'name', text:'Name', editable: true},
    {key: 'superpower', text:'Superpower', editable: true},
    {key: 'address', text:'Address', editable: true},
  ];
  constructor() { }
}
