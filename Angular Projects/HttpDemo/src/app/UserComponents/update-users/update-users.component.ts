import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.css']
})
export class UpdateUsersComponent implements OnInit {

  constructor(private uService : UserService) { }

  ngOnInit(): void {
  }

  idToUpdate !: number;
  nameToUpdate !:string;
  ageToUpdate !: number;
  countryToUpdate !: string;

  updateUser(){
    const userToUpdate: user = {
      id: this.idToUpdate,
      name: this.nameToUpdate,
      age: this.ageToUpdate,
      country: this.countryToUpdate,
    };

  this.uService.putUser(this.idToUpdate, userToUpdate).subscribe(data =>{
    alert("Updated the user details!!!")
  })
  }

}
