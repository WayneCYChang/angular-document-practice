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
import { GuideComponentStylesComponent } from './guide-component-styles/guide-component-styles.component';
import { SytleChildComponent } from './guide-component-styles/sytle-child/sytle-child.component';
import { ShadowDomComponent } from './guide-component-styles/shadow-dom/shadow-dom.component';
import { StyleNoneComponent } from './guide-component-styles/style-none/style-none.component';
import { StyleEmulatedComponent } from './guide-component-styles/style-emulated/style-emulated.component';
import { GuideDynamicComponentLoaderComponent } from './guide-dynamic-component-loader/guide-dynamic-component-loader.component';
import { AdHostDirective } from './guide-dynamic-component-loader/ad-host.directive';
import { AdBannerComponent } from './guide-dynamic-component-loader/ad-banner/ad-banner.component';
import { HeroJobAdComponent } from './guide-dynamic-component-loader/hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './guide-dynamic-component-loader/hero-profile/hero-profile.component';

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
    MissionChildComponent,
    GuideComponentStylesComponent,
    SytleChildComponent,
    ShadowDomComponent,
    StyleNoneComponent,
    StyleEmulatedComponent,
    GuideDynamicComponentLoaderComponent,
    AdHostDirective,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // entryComponents: [ HeroJobAdComponent, HeroProfileComponent ], // deprecated at v9.0.0
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
