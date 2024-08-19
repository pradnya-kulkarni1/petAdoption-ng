import { Component, OnInit } from '@angular/core';
import { UserService } from '../../app/services/user.service';
import { User } from '../../app/models/user';
import { UserLogin } from '../../app/models/user-login';
import { Router } from '@angular/router';
import { SystemService } from '../../app/services/system.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent implements OnInit {
  user: User = new User();
  userlogin: UserLogin = new UserLogin();
  message?: string = undefined;

  constructor(private userSvc: UserService,
    private router:Router,
    private systemSvc: SystemService
  ){}
  
  ngOnInit(): void {

    this.userlogin.email = "pradnya@abcd.com";
    this.userlogin.password = "miracle1";
  }

  login(): void{
    this.userSvc.login(this.userlogin).subscribe({
      next: (resp)=> {
        this.systemSvc.loggedInUser = resp;
        console.log(resp);
        this.router.navigateByUrl('/home');
      },
      error:(err)=> {
        this.message = 'Invalid username / password combination. Try again';
      },
      complete: ()=> {}
    });

}
}
