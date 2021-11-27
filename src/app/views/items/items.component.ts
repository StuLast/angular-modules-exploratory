import { Component, Input, OnInit } from '@angular/core';

export interface IItem {
  imageUrl: string,
  title?: string,
  description?: string
}

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  @Input() items: IItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
