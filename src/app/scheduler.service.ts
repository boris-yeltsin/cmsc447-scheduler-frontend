import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable, EMPTY } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

import { environment } from './../environments/environment';

export interface Classroom {
  classroom: string;
  capacity: number;
}

export interface Class {
  subject: string;
  course: string;
  course_title: string;
  ver: string;
  sec: string;
  instructor_real_name: string;
  time: string;
  capacity: number;
}

export interface ScheduledClass extends Class {
  classroom: string;
}

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {
  classrooms: BehaviorSubject<Classroom[]>;
  classes: BehaviorSubject<Class[]>;
  schedule: BehaviorSubject<ScheduledClass[]>;
  error: BehaviorSubject<string>;
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
    this.classrooms = new BehaviorSubject<Classroom[]>([]);
    this.classes = new BehaviorSubject<Class[]>([]);
    this.schedule = new BehaviorSubject<ScheduledClass[]>([]);
    this.error = new BehaviorSubject<string>('');
  }

  validateAndGetSchedule(): Observable<void> {
    const classrooms = this.classrooms.value;
    const classes = this.classes.value;
    const classroomError = this.validateClassrooms(classrooms);
    if(classroomError) {
      this.errorHandler(classroomError);
      return EMPTY;
    }
    const classError = this.validateClasses(classes);
    if(classError) {
      this.errorHandler(classError);
      return EMPTY;
    }
    return this.getSchedule(classes, classrooms).pipe(
      map(data => {
        this.schedule.next(data);
      }),
      catchError(e => {
        this.errorHandler(e.message);
        throw(e);
      })
    );
    /*this.getSchedule(classes, classrooms).subscribe(
      data => {
        this.schedule.next(data);
      },
      error => {
        this.errorHandler(error.message);
      }
    );*/
  }

  getSchedule(classes, classrooms): Observable<ScheduledClass[]> {
    return this.http.post<ScheduledClass[]>(
      this.apiUrl,
      {classes: classes, classrooms: classrooms}
    );
  }

  validateClassrooms(classrooms: Classroom[]): string | null {
    if(classrooms.length == 0) {
      return 'You must add classrooms before generating a schedule.';
    }
  }

  validateClasses(classes: Class[]): string | null {
    if(classes.length == 0) {
      return 'You must add classes before generating a schedule.';
    }
  }

  errorHandler(errorMessage: string) {
    this.error.next(errorMessage);
  }
}
