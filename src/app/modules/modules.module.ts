import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ModulesHomeComponent } from './modules-home/modules-home.component';

import { SharedModule } from '../shared/shared.module';
import { ModulesRoutingModule } from './modules-routing,module';
import { AccordionComponent } from './accordion/accordion.component';


@NgModule({
  declarations: [
    ModalComponent,
    ModulesHomeComponent,
    AccordionComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    SharedModule
  ]
})
export class ModulesModule { }
