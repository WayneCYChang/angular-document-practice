import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverSelfElementComponent } from './conver-self-element.component';

describe('ConverSelfElementComponent', () => {
  let component: ConverSelfElementComponent;
  let fixture: ComponentFixture<ConverSelfElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConverSelfElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverSelfElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
