import { Component, OnInit } from '@angular/core';
import { SchedulerService } from 'src/app/scheduler.service';

@Component({
  selector: 'app-generate-schedule',
  templateUrl: './generate-schedule.component.html',
  styleUrls: ['./generate-schedule.component.css']
})
export class GenerateScheduleComponent implements OnInit {

  constructor(private schedulerService: SchedulerService) { }

  ngOnInit(): void {
  }

  generateSchedule() {
    this.schedulerService.validateAndGetSchedule();
  }
}
