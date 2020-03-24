import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SytleChildComponent } from './sytle-child.component';

describe('SytleChildComponent', () => {
  let component: SytleChildComponent;
  let fixture: ComponentFixture<SytleChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SytleChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SytleChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
