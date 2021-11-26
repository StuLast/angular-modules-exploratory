import { Component, OnInit, Input } from '@angular/core';

export interface IHeader {
  key: string,
  label: string
}

export interface ITableRecord {
  [key:string]: any
}


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data: ITableRecord[] = [];
  @Input() headers: IHeader[] = [];
  @Input() classNames: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
