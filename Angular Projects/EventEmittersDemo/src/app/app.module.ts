import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstChildComponent } from './Components/first-child/first-child.component';
import { SecondChildComponent } from './Components/second-child/second-child.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstChildComponent,
    SecondChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
