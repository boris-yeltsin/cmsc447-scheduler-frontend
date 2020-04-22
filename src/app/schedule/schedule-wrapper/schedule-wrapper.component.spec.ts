import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleWrapperComponent } from './schedule-wrapper.component';

describe('ScheduleWrapperComponent', () => {
  let component: ScheduleWrapperComponent;
  let fixture: ComponentFixture<ScheduleWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
