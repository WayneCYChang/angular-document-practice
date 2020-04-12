import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideReactiveFormsComponent } from './guide-reactive-forms.component';

describe('GuideReactiveFormsComponent', () => {
  let component: GuideReactiveFormsComponent;
  let fixture: ComponentFixture<GuideReactiveFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideReactiveFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
