import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideObservableComponent } from './guide-observable.component';

describe('GuideObservableComponent', () => {
  let component: GuideObservableComponent;
  let fixture: ComponentFixture<GuideObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
