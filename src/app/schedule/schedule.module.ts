import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { ScheduleWrapperComponent } from './schedule-wrapper/schedule-wrapper.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { GenerateScheduleComponent } from './generate-schedule/generate-schedule.component';

@NgModule({
  declarations: [ScheduleWrapperComponent, ScheduleComponent, GenerateScheduleComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule
  ],
  exports: [
    ScheduleWrapperComponent
  ]
})
export class ScheduleModule { }
