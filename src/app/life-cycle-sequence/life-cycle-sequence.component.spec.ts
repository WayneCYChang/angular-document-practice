import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleSequenceComponent } from './life-cycle-sequence.component';

describe('LifeCycleSequenceComponent', () => {
  let component: LifeCycleSequenceComponent;
  let fixture: ComponentFixture<LifeCycleSequenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeCycleSequenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycleSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
