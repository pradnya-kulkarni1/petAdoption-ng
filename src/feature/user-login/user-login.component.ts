import { Component, OnInit } from '@angular/core';
import { UserService } from '../../app/services/user.service';
import { User } from '../../app/models/user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent implements OnInit {
  users: User[] = [];

  constructor(private userSvc: UserService){}
  
  ngOnInit(): void {

    this.userSvc.getUsers().subscribe({
      next: (resp)=> {
        this.users = resp;
        console.log(resp);
        console.log(this.users);
      },
      error:(err)=> {
        console.log(err);
      },
      complete: ()=> {}
    });

  }

}
