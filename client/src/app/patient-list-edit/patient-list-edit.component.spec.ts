import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientListEditComponent } from './patient-list-edit.component';

describe('PatientListEditComponent', () => {
  let component: PatientListEditComponent;
  let fixture: ComponentFixture<PatientListEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientListEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
