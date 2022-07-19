import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SeconfComponent } from './seconf/seconf.component';
//step 1 - 2way binding
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SeconfComponent
  ],
  imports: [ //step 2 - 2way binding
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
