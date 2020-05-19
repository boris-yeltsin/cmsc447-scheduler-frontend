import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { SchedulerService } from 'src/app/scheduler.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {
  displayedColumns: string[] = [
    'rowNumber', 'subject', 'course', 'course_title', 'ver', 'sec', 'instructor_real_name',
    'time', 'capacity'
  ];
  dataSource;

  constructor(private schedulerService: SchedulerService) { }

  ngOnInit(): void {
    this.schedulerService.classes.pipe(
      tap((c) => {
        this.dataSource = c;
      })
    ).subscribe();
  }

}
