import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideComponentInteractionComponent } from './guide-component-interaction.component';

describe('GuideComponentInteractionComponent', () => {
  let component: GuideComponentInteractionComponent;
  let fixture: ComponentFixture<GuideComponentInteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideComponentInteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideComponentInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
