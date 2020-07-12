import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideModuleTypesComponent } from './guide-module-types.component';

describe('GuideModuleTypesComponent', () => {
  let component: GuideModuleTypesComponent;
  let fixture: ComponentFixture<GuideModuleTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideModuleTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideModuleTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
