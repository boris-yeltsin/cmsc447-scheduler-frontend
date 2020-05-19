import { Component, OnInit } from '@angular/core';
import * as Papa from 'papaparse';
import { SchedulerService } from 'src/app/scheduler.service';
import { FlexibleConnectedPositionStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-classroom-upload',
  templateUrl: './classroom-upload.component.html',
  styleUrls: ['./classroom-upload.component.css']
})
export class ClassroomUploadComponent implements OnInit {
  filename = 'Select a classrooms file to upload.';

  constructor(private schedulerService: SchedulerService) { }

  ngOnInit(): void {
  }

  uploadListener($event: any): void {
    let files = $event.srcElement.files;
    Papa.parse(files[0], {
      header: true,
      transformHeader: (header) => {
        return header.replace(/ /g,'').toLowerCase();
      },
      skipEmptyLines: 'greedy',
      complete: (result, file) => {
        if(!this.schedulerService.fileTypeIsValid(file)) {
          this.schedulerService.errorHandler("Invalid file type. Please upload a CSV.");
          return;
        } else {
          this.filename = file.name;
          let e: string = this.schedulerService.validateClassrooms(result.data);
          if(e) {
            this.schedulerService.errorHandler(e);
          }
          this.schedulerService.classrooms.next(result.data);
        }
      }
    });
  }
}
