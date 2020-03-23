import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GuideDisplayingDataComponent } from './guide-displaying-data/guide-displaying-data.component';
import { GuideTemplateSyntaxComponent } from './guide-template-syntax/guide-template-syntax.component';
import { ChildOfTemplateSyntaxComponent } from './guide-template-syntax/child-of-template-syntax/child-of-template-syntax.component';
import { TwoWayBindingComponent } from './guide-template-syntax/two-way-binding/two-way-binding.component';
import { ParentComponent } from './guide-template-syntax/parent/parent.component';
import { ChildComponent } from './guide-template-syntax/parent/child/child.component';
import { GuideUserInputComponent } from './guide-user-input/guide-user-input.component';
import { GuideLifecycleHookComponent } from './guide-lifecycle-hook/guide-lifecycle-hook.component';
import { LifecycleChildComponent } from './guide-lifecycle-hook/lifecycle-child/lifecycle-child.component';
import { LifecycleViewchildComponent } from './guide-lifecycle-hook/lifecycle-viewchild/lifecycle-viewchild.component';
import { LifeCycleBriefComponent } from './guide-lifecycle-hook/life-cycle-brief/life-cycle-brief.component';
import { LifeCycleBriefChildComponent } from './guide-lifecycle-hook/life-cycle-brief/life-cycle-brief-child/life-cycle-brief-child.component';
import { BriefDirective } from './guide-lifecycle-hook/life-cycle-brief/brief.directive';
import { BriefSecondDirective } from './guide-lifecycle-hook/life-cycle-brief/brief-second.directive';
import { GuideComponentInteractionComponent } from './guide-component-interaction/guide-component-interaction.component';
import { InteractionChildComponent } from './guide-component-interaction/interaction-child/interaction-child.component';
import { MissionChildComponent } from './guide-component-interaction/mission-child/mission-child.component';

@NgModule({
  declarations: [
    AppComponent,
    GuideDisplayingDataComponent,
    GuideTemplateSyntaxComponent,
    ChildOfTemplateSyntaxComponent,
    TwoWayBindingComponent,
    ParentComponent,
    ChildComponent,
    GuideUserInputComponent,
    GuideLifecycleHookComponent,
    LifecycleChildComponent,
    LifecycleViewchildComponent,
    LifeCycleBriefComponent,
    LifeCycleBriefChildComponent,
    BriefDirective,
    BriefSecondDirective,
    GuideComponentInteractionComponent,
    InteractionChildComponent,
    MissionChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
