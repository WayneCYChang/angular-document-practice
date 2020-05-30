import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


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
import { GuideElementsComponent } from './guide-elements/guide-elements.component';
import { ConverSelfElementComponent } from './guide-elements/conver-self-element/conver-self-element.component';
import { GuideAttributeDirectivesComponent } from './guide-attribute-directives/guide-attribute-directives.component';
import { HighlightDirective } from './guide-attribute-directives/highlight.directive';
import { GuideStructuralDirectivesComponent } from './guide-structural-directives/guide-structural-directives.component';
import { UnlessDirective } from './guide-structural-directives/unless.directive';
import { GuidePipesComponent } from './guide-pipes/guide-pipes.component';
import { ExponentialStrengthPipe } from './guide-pipes/exponential-strength.pipe';
import { FlyingHeroesPipe } from './guide-pipes/flying-heroes.pipe';
import { FlyingHeroesImpurePipe } from './guide-pipes/flying-heroes-impure.pipe';
import { FetchJsonPipe } from './guide-pipes/fetch-json.pipe';
import { GuideReactiveFormsComponent } from './guide-reactive-forms/guide-reactive-forms.component';
import { GuideFormsComponent } from './guide-forms/guide-forms.component';
import { GuideFormValidationComponent } from './guide-form-validation/guide-form-validation.component';
import { ForbiddenNameDirective } from './guide-form-validation/forbidden-name.directive';
import { IdentityRevealedDirective } from './guide-form-validation/identity-revealed.directive';
import { UniqueAlterEgoValidatorDirective } from './guide-form-validation/unique-alter-ego-validator.directive';

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
    HeroProfileComponent,
    GuideElementsComponent,
    ConverSelfElementComponent,
    GuideAttributeDirectivesComponent,
    HighlightDirective,
    GuideStructuralDirectivesComponent,
    UnlessDirective,
    GuidePipesComponent,
    ExponentialStrengthPipe,
    FlyingHeroesPipe,
    FlyingHeroesImpurePipe,
    FetchJsonPipe,
    GuideReactiveFormsComponent,
    GuideFormsComponent,
    GuideFormValidationComponent,
    ForbiddenNameDirective,
    IdentityRevealedDirective,
    UniqueAlterEgoValidatorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  // entryComponents: [ HeroJobAdComponent, HeroProfileComponent ], // deprecated at v9.0.0 - dynamic component loader
  entryComponents: [ ConverSelfElementComponent ], // use for custom element @angular/element
  providers: [],
  schemas: [NO_ERRORS_SCHEMA], // for custom element or illegal W3C element
  bootstrap: [AppComponent]
})
export class AppModule { }
