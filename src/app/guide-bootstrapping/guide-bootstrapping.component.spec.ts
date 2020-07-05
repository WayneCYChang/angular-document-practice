import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideBootstrappingComponent } from './guide-bootstrapping.component';

describe('GuideBootstrappingComponent', () => {
  let component: GuideBootstrappingComponent;
  let fixture: ComponentFixture<GuideBootstrappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideBootstrappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideBootstrappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
