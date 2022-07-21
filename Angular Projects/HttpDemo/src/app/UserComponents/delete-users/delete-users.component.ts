import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-delete-users',
  templateUrl: './delete-users.component.html',
  styleUrls: ['./delete-users.component.css']
})
export class DeleteUsersComponent implements OnInit {

  constructor(private uService:UserService) { }

  ngOnInit(): void {
  }

  idToDelete !: number;
  deleteUserByID(){
   this.uService.deleteUser(this.idToDelete).subscribe(data =>{
    alert("User is deleted!!")
   })
  }

}
