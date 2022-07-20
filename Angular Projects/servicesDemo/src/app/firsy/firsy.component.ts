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
   u !: user;
   idToGet !: number;
  constructor(private us : UserService) {
   }

  ngOnInit(): void {
  }

  getUsers(){
    this.us.getAllUsers().subscribe(data =>{
      this.users = data;
    })
  }

  getUserById(){
    this.us.getUserByID(this.idToGet).subscribe(data => {
      this.u = data
    })

  }

}
