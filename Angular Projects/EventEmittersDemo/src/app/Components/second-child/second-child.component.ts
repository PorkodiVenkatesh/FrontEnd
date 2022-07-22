import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  counterSC !: number;

  @Output()
  change : EventEmitter<number> = new EventEmitter<number>()


  decrement(){
    this.counterSC --;
    this.change.emit(this.counterSC)
  }


}
