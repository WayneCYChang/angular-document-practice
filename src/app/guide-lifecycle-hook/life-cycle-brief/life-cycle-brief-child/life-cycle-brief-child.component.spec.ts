import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleBriefChildComponent } from './life-cycle-brief-child.component';

describe('LifeCycleBriefChildComponent', () => {
  let component: LifeCycleBriefChildComponent;
  let fixture: ComponentFixture<LifeCycleBriefChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeCycleBriefChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycleBriefChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
