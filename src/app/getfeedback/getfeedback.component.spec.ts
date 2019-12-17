import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetfeedbackComponent } from './getfeedback.component';

describe('GetfeedbackComponent', () => {
  let component: GetfeedbackComponent;
  let fixture: ComponentFixture<GetfeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetfeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
