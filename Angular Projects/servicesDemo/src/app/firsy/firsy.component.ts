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
   u: user = {
     id: 0,
     name: '',
     age: 0
   };
   idToGet !: number;
   nameToGet !: string;
   usersByName :  user[] = [];
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
      console.log(data)
      this.u.id = data.id;
      this.u.name = data.name;
      this.u.age = data.age;
    })
  }

  getUsersByName(){
    this.us.getUsersByName(this.nameToGet).subscribe(data => {
      this.usersByName = data;
    })
  }

  nameToAdd !:string;
  ageToAdd !:number;
  userToAdd : user = {
    id: 0,
    name: '',
    age: 0
  }
  addUser(){
    this.userToAdd.name = this.nameToAdd;
    this.userToAdd.age = this.ageToAdd;
    this.us.postUser(this.userToAdd).subscribe(
      data => {
        console.log(data)
        alert("added the user!!")
      }
    )
  }

  idToDelete !:number;

  deleteUserById(){
    this.us.deleteUser(this.idToDelete).subscribe( data => {
      console.log(data)
      alert("deleted the user!!")
    })
  }

  idToUpdate !:number;
  nameToUpdate !:string;
  ageToUpdate !:number;

  userToUpdate : user = {
    id: 0,
    name: '',
    age: 0
  }

  updateUser(){
    this.userToUpdate.id = this.idToUpdate;
    this.userToUpdate.name = this.nameToUpdate;
    this.userToUpdate.age = this.ageToUpdate;
    this.us.putUser(this.idToUpdate, this.userToUpdate).subscribe(data => {
      alert("updated the user!!")
    })
  }

}
