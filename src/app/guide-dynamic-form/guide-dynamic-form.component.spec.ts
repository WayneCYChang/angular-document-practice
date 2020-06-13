import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideDynamicFormComponent } from './guide-dynamic-form.component';

describe('GuideDynamicFormComponent', () => {
  let component: GuideDynamicFormComponent;
  let fixture: ComponentFixture<GuideDynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideDynamicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
