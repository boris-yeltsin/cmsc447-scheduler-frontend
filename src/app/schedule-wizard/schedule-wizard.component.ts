import { Component, OnInit } from '@angular/core';
import { SchedulerService } from '../scheduler.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-schedule-wizard',
  templateUrl: './schedule-wizard.component.html',
  styleUrls: ['./schedule-wizard.component.css']
})
export class ScheduleWizardComponent implements OnInit {
  classroomsAdded = false;
  classesAdded = false;

  constructor(private schedulerService: SchedulerService) {
    this.schedulerService.classes.pipe(
      tap((c) => {
        this.classesAdded = c.length > 0;
      })
    ).subscribe();
    this.schedulerService.classrooms.pipe(
      tap((c) => {
        this.classroomsAdded = c.length > 0;
      })
    ).subscribe();
  }

  ngOnInit(): void {
  }

}
