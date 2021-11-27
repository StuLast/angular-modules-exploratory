import { Component, Input, OnInit } from '@angular/core';

export interface IStat {
  label: string,
  value: number
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  @Input() stats: IStat[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
