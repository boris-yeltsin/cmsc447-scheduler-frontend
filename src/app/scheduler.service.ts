import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {
  classrooms: BehaviorSubject<Classroom[]>;
  classes: BehaviorSubject<Class[]>;

  constructor() {
    this.classrooms = new BehaviorSubject<Classroom[]>([]);
    this.classes = new BehaviorSubject<Class[]>([]);
  }
}
