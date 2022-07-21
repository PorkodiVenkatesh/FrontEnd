import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GetUsersComponent } from './UserComponents/get-users/get-users.component';
import { CreateUsersComponent } from './UserComponents/create-users/create-users.component';
import { DeleteUsersComponent } from './UserComponents/delete-users/delete-users.component';
import { UpdateUsersComponent } from './UserComponents/update-users/update-users.component';

@NgModule({
  declarations: [
    AppComponent,
    GetUsersComponent,
    CreateUsersComponent,
    DeleteUsersComponent,
    UpdateUsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
