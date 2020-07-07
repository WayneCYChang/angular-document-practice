import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideFrequentNgmodulesComponent } from './guide-frequent-ngmodules.component';

describe('GuideFrequentNgmodulesComponent', () => {
  let component: GuideFrequentNgmodulesComponent;
  let fixture: ComponentFixture<GuideFrequentNgmodulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideFrequentNgmodulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideFrequentNgmodulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
