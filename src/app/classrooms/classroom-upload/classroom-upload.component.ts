import { Component, OnInit } from '@angular/core';
import * as Papa from 'papaparse';
import { SchedulerService } from 'src/app/scheduler.service';

@Component({
  selector: 'app-classroom-upload',
  templateUrl: './classroom-upload.component.html',
  styleUrls: ['./classroom-upload.component.css']
})
export class ClassroomUploadComponent implements OnInit {
  filename = 'No file selected.';

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
      skipEmptyLines: true,
      complete: (result, file) => {
        console.log(result.data, file);
        this.filename = file.name;
        this.schedulerService.classrooms.next(result.data);
      }
    });
  }
}
