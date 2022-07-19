import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directivesDemo';

   nums = [1, 2, 3, 4 ,5]
   users = [
    {
      "id" : "1",
      "name" : "porkodi"
    },
    {
      "id" : "2",
      "name" : "sayali"
    }
   ]

   emps : emp[] = [
    { id : 12 , name : "Porkodi" , dept : "Technology"},
    {id : 13, name : "karthick" , dept: "HR"},
    {id : 14, name:  "Meera" , dept : "PD"}
   ];

   num !: number;
   a  !: number;
   b  !: number;
   clNum!: number;

}
interface emp {
  id : number;
  name : string;
  dept : string;
}


