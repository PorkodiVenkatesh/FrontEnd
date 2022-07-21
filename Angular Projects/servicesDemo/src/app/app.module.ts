import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FirsyComponent } from './firsy/firsy.component';
import { SecondComponent } from './second/second.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { PipeDemoPipe } from './pipe-demo.pipe';
@NgModule({
  declarations: [
    AppComponent,
    FirsyComponent,
    SecondComponent,
    PipeDemoPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
