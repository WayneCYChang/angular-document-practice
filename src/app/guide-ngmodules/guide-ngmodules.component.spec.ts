import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideNgmodulesComponent } from './guide-ngmodules.component';

describe('GuideNgmodulesComponent', () => {
  let component: GuideNgmodulesComponent;
  let fixture: ComponentFixture<GuideNgmodulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideNgmodulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideNgmodulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
