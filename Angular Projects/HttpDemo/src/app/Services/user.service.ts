import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from '../Models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  //httpheadrs
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  getUsers() : Observable<user[]>{
    return this.http.get<user[]>('http://localhost:3000/users')
  }

  postUser(userToAdd : user) : Observable<user>{
    return this.http.post<user>('http://localhost:3000/users', userToAdd, this.httpOptions);
  }
}
