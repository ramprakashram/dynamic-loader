import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicModuleModule } from './components/dynamic-module/dynamic-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DynamicModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
