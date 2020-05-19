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
  classroom_capacity: number;
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
        console.error(e);
        this.httpErrorHandler(e);
        this.schedule.next([]);
        throw(e);
      })
    );
  }

  getSchedule(classes, classrooms): Observable<ScheduledClass[]> {
    return this.http.post<ScheduledClass[]>(
      this.apiUrl + '/schedule',
      {classes: classes, classrooms: classrooms}
    );
  }

  validateClassrooms(classrooms: Classroom[]): string | null {
    let errorPrefix = "Error validating classrooms: ";
    if(classrooms.length == 0) {
      return `${errorPrefix}: No classrooms added.`;
    }
    let row = 0;
    for(let c of classrooms) {
      row += 1;
      let rowPrefix = `Row #${row}: `;
      if(!c.capacity) {
        return `${errorPrefix}${rowPrefix} Classrooms must have a capacity.`;
      } else if(!c.classroom || this.isEmpty(c.classroom)) {
        return `${errorPrefix}${rowPrefix} Classrooms must have a classroom name.`;
      }
    }
  }

  re_time = new RegExp('^(mwf|tt|mw+)(\\d+)$');
  validateClasses(classes: Class[]): string | null {
    let errorPrefix = "Error validating classes: ";
    if(classes.length == 0) {
      return `${errorPrefix} No classes added.`;
    }
    let row = 0;
    for(let c of classes) {
      row += 1;
      let rowPrefix = `Row #${row}: `;
      if(!c.capacity) {
        return `${errorPrefix}${rowPrefix} Classes must have a capacity.`;
      } else if(!c.course || this.isEmpty(c.course)) {
        return `${errorPrefix}${rowPrefix} Classes must have a course number.`;
      } else if(!c.course_title || this.isEmpty(c.course_title)) {
        return `${errorPrefix}${rowPrefix} Classes must have a title.`;
      } else if(!c.instructor_real_name || this.isEmpty(c.instructor_real_name)) {
        return `${errorPrefix}${rowPrefix} Classes must have a instructor.`;
      } else if(!c.sec || this.isEmpty(c.sec)) {
        return `${errorPrefix}${rowPrefix} Classes must have a section.`;
      } else if(!c.subject || this.isEmpty(c.subject)) {
        return `${errorPrefix}${rowPrefix} Classes must have a subject.`;
      } else if(!c.time || this.isEmpty(c.time)) {
        return `${errorPrefix}${rowPrefix} Classes must have a time.`;
      }

      if(!this.re_time.test(c.time.toLowerCase())) {
        return `${errorPrefix}${rowPrefix} Time field must begin with 'mw', 'mwf', or 'tt', followed by an integer time. Invalid time string: "${c.time}"`;
      }
    }
  }

  isEmpty(s: string): boolean {
    return (s.length === 0 || !s.trim());
  }

  httpErrorHandler(e) {
    if(e.status == 400) {
      this.errorHandler('Failed to generate schedule: hard constraint violated.');
    } else if(e.status == 500) {
      this.errorHandler('Failed to generate schedule: Optaplanner solving failed, unexpected error encountered.');
    } else {
      this.errorHandler('Failed to generate schedule: Optaplanner solving failed, unexpected error encountered: ' + e.message);
    }
  }

  errorHandler(errorText) {
    this.error.next(errorText);
  }
}
