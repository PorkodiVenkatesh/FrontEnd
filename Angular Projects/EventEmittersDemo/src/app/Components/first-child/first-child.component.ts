import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent implements OnInit {

  constructor(){
      console.log("FC Constructor")
  }

  ngOnInit(): void {
    console.log("FC ngOnInit")
  }

  ngOnChanges(){
    console.log("Changes happened in the FC")
  }

  ngDoCheck(){
    console.log("In FC ngDoCheck");
  }
  ngAfterContentInit(){
    console.log("In FC ngAfterContentInit");
  }

  ngAfterContentChecked(){
    console.log("In FC ngAfterContentChecked");
  }

  ngAfterViewInit(){
    console.log("In FC ngAfterViewInit");

  }

  ngAfterViewChecked(){
    console.log("In FC ngAfterViewChecked");

  }

  ngOnDestroy(){
    console.log("In FC ngOnDestroy")
  }
 // this is varaible which go ona get the value form the parent
  @Input()
  counterFC !: number; //counterFC just holds a value that my app (parent) component pasess


  @Output()
  change : EventEmitter<number> = new EventEmitter<number>();

  increment(){
   this.counterFC++;
   //that values is change, incremented by 1
   this.change.emit(this.counterFC)
  }




}
