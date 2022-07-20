import { Component, OnInit } from '@angular/core';
import { user } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-firsy',
  templateUrl: './firsy.component.html',
  styleUrls: ['./firsy.component.css']
})
export class FirsyComponent implements OnInit {
   users : user[] = [];
  constructor(private us : UserService) {
   }

  ngOnInit(): void {
  }

  getUsers(){
    this.us.getAllUsers().subscribe(data =>{
      this.users = data;
    })
  }

}
