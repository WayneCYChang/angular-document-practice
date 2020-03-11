import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideDisplayingDataComponent } from './guide-displaying-data.component';

describe('GuideDisplayingDataComponent', () => {
  let component: GuideDisplayingDataComponent;
  let fixture: ComponentFixture<GuideDisplayingDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideDisplayingDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideDisplayingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
