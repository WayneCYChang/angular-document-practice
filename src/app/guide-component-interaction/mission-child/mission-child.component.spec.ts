import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionChildComponent } from './mission-child.component';

describe('MissionChildComponent', () => {
  let component: MissionChildComponent;
  let fixture: ComponentFixture<MissionChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
