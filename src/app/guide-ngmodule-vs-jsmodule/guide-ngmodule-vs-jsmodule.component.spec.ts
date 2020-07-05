import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideNgmoduleVsJsmoduleComponent } from './guide-ngmodule-vs-jsmodule.component';

describe('GuideNgmoduleVsJsmoduleComponent', () => {
  let component: GuideNgmoduleVsJsmoduleComponent;
  let fixture: ComponentFixture<GuideNgmoduleVsJsmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideNgmoduleVsJsmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideNgmoduleVsJsmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
