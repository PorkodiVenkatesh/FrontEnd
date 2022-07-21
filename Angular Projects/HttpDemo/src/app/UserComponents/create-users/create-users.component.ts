import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css'],
})
export class CreateUsersComponent implements OnInit {
  constructor(private uService: UserService) {}

  ngOnInit(): void {}

  nameToAdd!: string;
  ageToAdd!: number;
  countryToAdd!: string;

  addUser() {
    const userToAdd: user = {
      id: 0,
      name: this.nameToAdd,
      age: this.ageToAdd,
      country: this.countryToAdd,
    };
    this.uService.postUser(userToAdd).subscribe (data => {
      alert("Added the user!!")
    });
  }
}
