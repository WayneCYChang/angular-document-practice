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
    GuideLifecycleHookComponent
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
