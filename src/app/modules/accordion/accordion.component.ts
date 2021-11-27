import { Component, Input, OnInit } from '@angular/core';

interface IAccordionRow {
  title: string,
  content: string
}

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() items: IAccordionRow[] = [];
  openItemIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClick = (index:number):void => {
    if(index === this.openItemIndex) {
      this.openItemIndex = -1;
      return;
    }
    this.openItemIndex = index;
  }

}
