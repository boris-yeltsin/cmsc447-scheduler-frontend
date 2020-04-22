import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleWrapperComponent } from './schedule-wrapper/schedule-wrapper.component';



@NgModule({
  declarations: [ScheduleWrapperComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ScheduleWrapperComponent
  ]
})
export class ScheduleModule { }
