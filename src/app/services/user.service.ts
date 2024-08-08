import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { UserLogin } from '../models/user-login';

const URL: string = 'http://localhost:5248/api/users'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(URL);
  }

  login(userlogin: UserLogin): Observable<User>{
    return this.http.post(URL+'/login',userlogin) as Observable<User>;
  }
}
