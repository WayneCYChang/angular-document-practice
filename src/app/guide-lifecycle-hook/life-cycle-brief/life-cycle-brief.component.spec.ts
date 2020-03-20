import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleBriefComponent } from './life-cycle-brief.component';

describe('LifeCycleBriefComponent', () => {
  let component: LifeCycleBriefComponent;
  let fixture: ComponentFixture<LifeCycleBriefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeCycleBriefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycleBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
