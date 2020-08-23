import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideFeatureModulesComponent } from './guide-feature-modules.component';

describe('GuideFeatureModulesComponent', () => {
  let component: GuideFeatureModulesComponent;
  let fixture: ComponentFixture<GuideFeatureModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideFeatureModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideFeatureModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
