import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleNoneComponent } from './style-none.component';

describe('StyleNoneComponent', () => {
  let component: StyleNoneComponent;
  let fixture: ComponentFixture<StyleNoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleNoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleNoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
