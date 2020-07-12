import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleDataChangeComponent } from './life-cycle-data-change.component';

describe('LifeCycleDataChangeComponent', () => {
  let component: LifeCycleDataChangeComponent;
  let fixture: ComponentFixture<LifeCycleDataChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeCycleDataChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycleDataChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
