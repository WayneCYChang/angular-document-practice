import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideEntryComponentsComponent } from './guide-entry-components.component';

describe('GuideEntryComponentsComponent', () => {
  let component: GuideEntryComponentsComponent;
  let fixture: ComponentFixture<GuideEntryComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideEntryComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideEntryComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
