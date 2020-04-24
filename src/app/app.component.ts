import { Component } from '@angular/core';
import { SchedulerService } from './scheduler.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Classroom Scheduler';
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
}
