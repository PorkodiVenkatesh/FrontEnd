import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directiveExceriseDemo';

  name !: string;
  age !: number;
  str !: string;

  users : user[] = [{
    name : "abc",
    age: 25
  },{
    name : "cde",
    age: 68
  }
]
}

interface user{
  name: string;
  age: number;
}
