import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from '../feature/user-login/user-login.component';
import { WelcomeComponent } from '../feature/welcome/welcome.component';
import { AdoptionRequestComponent } from '../feature/adoption-request/adoption-request.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { BreedListComponent } from '../feature/Breed/breed-list/breed-list.component';
import { PetListComponent } from '../feature/pet/pet-list/pet-list.component';
import { PetCreateComponent } from '../feature/pet/pet-create/pet-create.component';
import { SpeciesListComponent } from '../feature/species/species-list/species-list.component';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { ReviewComponent } from '../feature/review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    WelcomeComponent,
    AdoptionRequestComponent,
    BreedListComponent,
    PetListComponent,
    PetCreateComponent,
    SpeciesListComponent,
    ReviewComponent

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    MatListModule

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
