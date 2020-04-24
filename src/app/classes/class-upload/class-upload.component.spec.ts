import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassUploadComponent } from './class-upload.component';

describe('ClassUploadComponent', () => {
  let component: ClassUploadComponent;
  let fixture: ComponentFixture<ClassUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
