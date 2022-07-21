import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from '../Models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  getUsers() : Observable<user[]>{
    return this.http.get<user[]>('http://localhost:3000/users')
  }
}
