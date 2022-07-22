import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  counter = 15;

  counterUpdateinFC(counterFC : number){
    this.counter = counterFC;
    console.log("Event emitted data from first Child, Updated the counter:" + this.counter);

  }

  counterUpdateinSC(counterSC: number){
    this.counter = counterSC;
    console.log("Event emitted data from second Child, Updated the counter:" + this.counter);
  }
}
