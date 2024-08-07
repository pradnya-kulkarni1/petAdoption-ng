import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from '../feature/user-create/user-create.component';
import { UserLoginComponent } from '../feature/user-login/user-login.component';
import { WelcomeComponent } from '../feature/welcome/welcome.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'user/create',component:UserCreateComponent},
  {path:'user/login',component:UserLoginComponent},
  {path:'**',component:WelcomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
