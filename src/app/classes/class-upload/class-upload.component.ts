import { Component, OnInit } from '@angular/core';
import * as Papa from 'papaparse';
import { SchedulerService } from 'src/app/scheduler.service';

@Component({
  selector: 'app-class-upload',
  templateUrl: './class-upload.component.html',
  styleUrls: ['./class-upload.component.css']
})
export class ClassUploadComponent implements OnInit {
  filename = 'Select a classes file to upload.';

  constructor(private schedulerService: SchedulerService) { }

  ngOnInit(): void {
  }

  uploadListener($event: any): void {
    let files = $event.srcElement.files;
    Papa.parse(files[0], {
      header: true,
      transformHeader: (header) => {
        return header
          .replace(/\./g,'')
          .replace(/\#/g,'')
          .trim()
          .replace(/ /g,'_')
          .toLowerCase();
      },
      skipEmptyLines: true,
      complete: (result, file) => {
        this.filename = file.name;
        let e = this.schedulerService.validateClasses(result.data);
        if(e) {
          this.schedulerService.errorHandler(e);
        }
        this.schedulerService.classes.next(result.data);
      }
    });
  }
}
