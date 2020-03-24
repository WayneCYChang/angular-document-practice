import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideComponentStylesComponent } from './guide-component-styles.component';

describe('GuideComponentStylesComponent', () => {
  let component: GuideComponentStylesComponent;
  let fixture: ComponentFixture<GuideComponentStylesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideComponentStylesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideComponentStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
