import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomUploadComponent } from './classroom-upload.component';

describe('ClassroomUploadComponent', () => {
  let component: ClassroomUploadComponent;
  let fixture: ComponentFixture<ClassroomUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassroomUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
