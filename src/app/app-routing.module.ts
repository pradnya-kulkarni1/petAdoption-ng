import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from '../feature/user-create/user-create.component';
import { UserLoginComponent } from '../feature/user-login/user-login.component';
import { WelcomeComponent } from '../feature/welcome/welcome.component';
import { AdoptionRequestComponent } from '../feature/adoption-request/adoption-request.component';
import { BreedListComponent } from '../feature/Breed/breed-list/breed-list.component';
import { PetListComponent } from '../feature/pet/pet-list/pet-list.component';
import { SpeciesListComponent } from '../feature/species/species-list/species-list.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'user/create',component:UserCreateComponent},
  {path:'user/login',component:UserLoginComponent},
  {path:'adoption/request',component:AdoptionRequestComponent},
  {path:'breed/list',component:BreedListComponent},
  {path:'pet/list',component:PetListComponent},
  {path:'species/list', component:SpeciesListComponent},
  {path:'**',component:WelcomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
