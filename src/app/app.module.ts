import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuideDisplayingDataComponent } from './guide-displaying-data/guide-displaying-data.component';
import { GuideTemplateSyntaxComponent } from './guide-template-syntax/guide-template-syntax.component';

@NgModule({
  declarations: [
    AppComponent,
    GuideDisplayingDataComponent,
    GuideTemplateSyntaxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
