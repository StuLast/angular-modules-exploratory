import { Component, OnInit } from '@angular/core'

import { IHeaders, ITableData } from '../table/table.component';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
 data: ITableData[] = [
    {
      name:'James',
      age: 24,
      job: 'Designer',
      employed: true
    },
    {
      name:'Jill',
      age: 26,
      job: 'Engineer',
      employed: true
    },
    {
      name:'Ed',
      age: 25,
      job: 'Engineer',
      employed: false
    },

  ];
  
  headers: IHeader[] =  [
    {key: "employed", label: "Has a job"},
    {key: "name", label: "Name"},
    {key: "age", label: "Age"},
    {key: "job", label: "Job"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
