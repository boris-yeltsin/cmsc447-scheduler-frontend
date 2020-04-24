import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { ClassroomWrapperComponent } from './classroom-wrapper/classroom-wrapper.component';
import { ClassroomListComponent } from './classroom-list/classroom-list.component';
import { ClassroomUploadComponent } from './classroom-upload/classroom-upload.component';

@NgModule({
  declarations: [ClassroomWrapperComponent, ClassroomListComponent, ClassroomUploadComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule
  ],
  exports: [
    ClassroomWrapperComponent
  ]
})
export class ClassroomsModule { }
