import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideFormsComponent } from './guide-forms.component';

describe('GuideFormsComponent', () => {
  let component: GuideFormsComponent;
  let fixture: ComponentFixture<GuideFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
