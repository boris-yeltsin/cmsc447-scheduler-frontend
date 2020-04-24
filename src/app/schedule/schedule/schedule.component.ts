import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { SchedulerService } from 'src/app/scheduler.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  displayedColumns: string[] = [
    'subject', 'course', 'course_title', 'ver', 'sec', 'instructor_real_name',
    'time', 'classroom', 'capacity'
  ];
  dataSource;

  constructor(private schedulerService: SchedulerService) { }

  ngOnInit(): void {
    this.schedulerService.schedule.pipe(
      tap((c) => {
        this.dataSource = c;
      })
    ).subscribe();
  }

}
