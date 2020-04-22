import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomWrapperComponent } from './classroom-wrapper.component';

describe('ClassroomWrapperComponent', () => {
  let component: ClassroomWrapperComponent;
  let fixture: ComponentFixture<ClassroomWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassroomWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
