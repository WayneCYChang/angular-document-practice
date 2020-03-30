import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideElementsComponent } from './guide-elements.component';

describe('GuideElementsComponent', () => {
  let component: GuideElementsComponent;
  let fixture: ComponentFixture<GuideElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
