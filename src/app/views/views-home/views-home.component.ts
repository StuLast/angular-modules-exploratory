import { Component, OnInit } from '@angular/core';
import { IStat } from '../statistics/statistics.component'

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats: IStat[] = [
    {label: "Requests", value: 100},
    {label: "Errors", value: 22},
    {label: "Complaints", value: 19},
    {label: "Kudos", value: 31},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
