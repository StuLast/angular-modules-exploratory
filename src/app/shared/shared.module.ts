import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingWidgetComponent } from './heading-widget/heading-widget.component';



@NgModule({
  declarations: [
    HeadingWidgetComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HeadingWidgetComponent]
})
export class SharedModule { }
