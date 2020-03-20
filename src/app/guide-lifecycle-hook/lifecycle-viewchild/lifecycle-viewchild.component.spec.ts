import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleViewchildComponent } from './lifecycle-viewchild.component';

describe('LifecycleViewchildComponent', () => {
  let component: LifecycleViewchildComponent;
  let fixture: ComponentFixture<LifecycleViewchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifecycleViewchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleViewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
