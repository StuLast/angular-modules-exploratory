import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modules-home',
  templateUrl: './modules-home.component.html',
  styleUrls: ['./modules-home.component.css']
})
export class ModulesHomeComponent implements OnInit {
  modalIsVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal = () => {
    this.modalIsVisible = !this.modalIsVisible;
 }



}
