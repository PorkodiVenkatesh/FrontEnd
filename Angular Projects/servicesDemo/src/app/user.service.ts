import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';
import { Observable } from 'rxjs';
import { user } from './user';
@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http : HttpClient ) {}

   // Http Headers
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  getUserByID(idToGet : number) : Observable<user> {
    return this.http.get<user>('http://localhost:3000/users/' + idToGet );
  }

  getAllUsers() : Observable<user[]> {
    return this.http.get<user[]>('http://localhost:3000/users');
  }

  getUsersByName(nameToGet : string) : Observable<user[]> {
    return this.http.get<user[]>('http://localhost:3000/users?name=' + nameToGet);
  }

  postUser(userToAdd : user) : Observable<user>{
    return this.http.post<user>('http://localhost:3000/users' , JSON.stringify(userToAdd), this.httpOptions)
  }

  deleteUser (idToDelete : number ): Observable<user>{
     return this.http.delete<user>('http://localhost:3000/users/' + idToDelete);
  }

  putUser (idToUpdate:number , userToUpdate : user) : Observable<user>{
    return this.http.put<user>('http://localhost:3000/users/'+ idToUpdate , JSON.stringify(userToUpdate), this.httpOptions)
  }


}
