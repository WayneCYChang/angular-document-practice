import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideAttributeDirectivesComponent } from './guide-attribute-directives.component';

describe('GuideAttributeDirectivesComponent', () => {
  let component: GuideAttributeDirectivesComponent;
  let fixture: ComponentFixture<GuideAttributeDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideAttributeDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideAttributeDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
