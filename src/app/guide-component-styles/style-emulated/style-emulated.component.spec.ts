import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleEmulatedComponent } from './style-emulated.component';

describe('StyleEmulatedComponent', () => {
  let component: StyleEmulatedComponent;
  let fixture: ComponentFixture<StyleEmulatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleEmulatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleEmulatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
