import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  loggedInUser: User = new User();

  constructor(private router:Router) { }

  checkLogin(): void{

    if (this.loggedInUser.id == 0){
      this.router.navigateByUrl('/user/login');
    }
  }
}
