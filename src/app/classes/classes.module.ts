import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { ClassesWrapperComponent } from './classes-wrapper/classes-wrapper.component';
import { ClassListComponent } from './class-list/class-list.component';
import { ClassUploadComponent } from './class-upload/class-upload.component';

@NgModule({
  declarations: [ClassesWrapperComponent, ClassListComponent, ClassUploadComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule
  ],
  exports: [
    ClassesWrapperComponent
  ]
})
export class ClassesModule { }
