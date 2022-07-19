import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excerise',
  templateUrl: './excerise.component.html',
  styleUrls: ['./excerise.component.css']
})
export class ExceriseComponent implements OnInit {


  name!: string;
  age!: number;

  users = [{
    "name" : "abc",
    "age": "25"
  },{
    "name" : "cde",
    "age": "68"
  }
]


  constructor() { }

  ngOnInit(): void {
  }

}
