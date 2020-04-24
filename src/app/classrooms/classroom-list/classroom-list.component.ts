import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { SchedulerService } from 'src/app/scheduler.service';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrls: ['./classroom-list.component.css']
})
export class ClassroomListComponent implements OnInit {
  displayedColumns: string[] = ['classroom', 'capacity'];
  dataSource;

  constructor(private schedulerService: SchedulerService) { }

  ngOnInit(): void {
    this.schedulerService.classrooms.pipe(
      tap((c) => {
        this.dataSource = c;
      })
    ).subscribe();
  }

}
