import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideDynamicComponentLoaderComponent } from './guide-dynamic-component-loader.component';

describe('GuideDynamicComponentLoaderComponent', () => {
  let component: GuideDynamicComponentLoaderComponent;
  let fixture: ComponentFixture<GuideDynamicComponentLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideDynamicComponentLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideDynamicComponentLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
