import { Component, OnInit } from '@angular/core';
import { IStat } from '../statistics/statistics.component'
import { IItem } from '../items/items.component';

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

  items: IItem[] = [
    {imageUrl: '/assets/images/couch.jpeg', title: 'Couch', description: 'this is a couch'},
    {imageUrl: '/assets/images/dresser.jpeg', title: 'Dresser', description: 'this is a Dresser'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
