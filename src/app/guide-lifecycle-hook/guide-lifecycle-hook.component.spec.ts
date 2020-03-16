import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideLifecycleHookComponent } from './guide-lifecycle-hook.component';

describe('GuideLifecycleHookComponent', () => {
  let component: GuideLifecycleHookComponent;
  let fixture: ComponentFixture<GuideLifecycleHookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideLifecycleHookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideLifecycleHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
