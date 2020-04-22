import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassroomWrapperComponent } from './classroom-wrapper/classroom-wrapper.component';



@NgModule({
  declarations: [ClassroomWrapperComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ClassroomWrapperComponent
  ]
})
export class ClassroomsModule { }
