import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideUserInputComponent } from './guide-user-input.component';

describe('GuideUserInputComponent', () => {
  let component: GuideUserInputComponent;
  let fixture: ComponentFixture<GuideUserInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideUserInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideUserInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
