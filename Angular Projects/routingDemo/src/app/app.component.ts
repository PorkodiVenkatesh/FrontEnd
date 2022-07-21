import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routingDemo';
  //yyyy,m,dd
  //month jan ->0, feb -> 1
  dob = new Date(1999, 0, 15)
}
