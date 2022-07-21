import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {

  constructor(private uService : UserService) { }

  ngOnInit(): void {
  }

  users : user[] = [];

  getAllUsers(){
      this.uService.getUsers().subscribe(data => {
          this.users = data;
      })
  }

}
