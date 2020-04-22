import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesWrapperComponent } from './classes-wrapper/classes-wrapper.component';



@NgModule({
  declarations: [ClassesWrapperComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ClassesWrapperComponent
  ]
})
export class ClassesModule { }
