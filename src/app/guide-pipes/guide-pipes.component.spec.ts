import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidePipesComponent } from './guide-pipes.component';

describe('GuidePipesComponent', () => {
  let component: GuidePipesComponent;
  let fixture: ComponentFixture<GuidePipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidePipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
