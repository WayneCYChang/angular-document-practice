import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideFormValidationComponent } from './guide-form-validation.component';

describe('GuideFormValidationComponent', () => {
  let component: GuideFormValidationComponent;
  let fixture: ComponentFixture<GuideFormValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideFormValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
