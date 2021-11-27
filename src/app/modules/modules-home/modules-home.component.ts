import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modules-home',
  templateUrl: './modules-home.component.html',
  styleUrls: ['./modules-home.component.css']
})
export class ModulesHomeComponent implements OnInit {
  modalIsVisible = false;

  accordionContent = [
    { title: "Why is the sky blue?", content: "Because of the refractive colour of oxygen."},
    { title: "Why are oranges so tart?", content: "Because they contain citric acid."},
    { title: "Whats the air pressure at sea level?", content: "For SCUBA diving it's assumed to be 1 bar."},
    { title: "How much does the pressure increase when diving?", content: "1 bar for every 10 metres (approx)."}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal = () => {
    this.modalIsVisible = !this.modalIsVisible;
 }
}
