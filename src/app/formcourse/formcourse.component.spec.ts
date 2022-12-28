import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcourseComponent } from './formcourse.component';

describe('FormcourseComponent', () => {
  let component: FormcourseComponent;
  let fixture: ComponentFixture<FormcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
