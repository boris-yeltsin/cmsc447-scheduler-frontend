import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ErrorMessage {
  title: string;
  message: string;
}

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ErrorMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ErrorMessage
  ) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}