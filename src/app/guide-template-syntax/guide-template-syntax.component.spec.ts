import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideTemplateSyntaxComponent } from './guide-template-syntax.component';

describe('GuideTemplateSyntaxComponent', () => {
  let component: GuideTemplateSyntaxComponent;
  let fixture: ComponentFixture<GuideTemplateSyntaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideTemplateSyntaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideTemplateSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
