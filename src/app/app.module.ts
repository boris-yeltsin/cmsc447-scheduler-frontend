import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { ClassesModule } from './classes/classes.module';
import { ClassroomsModule } from './classrooms/classrooms.module'
import { ScheduleModule } from './schedule/schedule.module';
import { ErrorMessageComponent } from './error-message/error-message.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatStepperModule,
    ClassesModule,
    ClassroomsModule,
    ScheduleModule,
    MatButtonModule,
    MatDividerModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
