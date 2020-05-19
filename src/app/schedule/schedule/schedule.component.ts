import { Component, OnInit, ViewChild } from '@angular/core';

import * as Papa from 'papaparse';
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
    'time', 'classroom', 'capacity', 'classroom_capacity'
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

  exportSchedule(): void {
    const csvSchedule = Papa.unparse(this.schedulerService.schedule.value);
    var csvData = new Blob([csvSchedule], {type: 'text/csv;charset=utf-8;'});
    var csvURL = window.URL.createObjectURL(csvData);
    var tempLink = document.createElement('a');
    tempLink.href = csvURL;
    tempLink.setAttribute('download', 'optimizedSchedule.csv');
    tempLink.click();
  }
}
