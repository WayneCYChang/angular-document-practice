import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideStructuralDirectivesComponent } from './guide-structural-directives.component';

describe('GuideStructuralDirectivesComponent', () => {
  let component: GuideStructuralDirectivesComponent;
  let fixture: ComponentFixture<GuideStructuralDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideStructuralDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideStructuralDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
