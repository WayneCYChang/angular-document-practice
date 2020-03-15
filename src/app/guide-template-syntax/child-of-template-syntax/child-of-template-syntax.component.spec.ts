import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOfTemplateSyntaxComponent } from './child-of-template-syntax.component';

describe('ChildOfTemplateSyntaxComponent', () => {
  let component: ChildOfTemplateSyntaxComponent;
  let fixture: ComponentFixture<ChildOfTemplateSyntaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildOfTemplateSyntaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildOfTemplateSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
