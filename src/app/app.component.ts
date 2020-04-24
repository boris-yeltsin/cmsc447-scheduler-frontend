import { Component } from '@angular/core';
import { SchedulerService } from './scheduler.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorMessageComponent } from './error-message/error-message.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Classroom Scheduler';

  constructor(private schedulerService: SchedulerService, public dialog: MatDialog) {
    this.schedulerService.error.subscribe(e => {this.showError(e)});
  }

  showError(message: string): void {
    if(!message.length) {
      return;
    }
    const dialogRef = this.dialog.open(ErrorMessageComponent, {
      width: '400px',
      data: {title: 'Error', message: message}
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
}
