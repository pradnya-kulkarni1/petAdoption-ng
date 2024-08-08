import { Component, OnInit } from '@angular/core';
import { Pet } from '../../app/models/pet';
import { PetService } from '../../app/services/pet.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{
  pets :Pet[] = [];

  constructor(private petSvc: PetService){}
  ngOnInit(): void{

    this.petSvc.getPets().subscribe({
      next: (resp)=> {
        this.pets = resp;
        console.log(resp);
        console.log(this.pets);
      },
      error:(err)=> {
        console.log(err);
      },
      complete: ()=> {}
    })
    
  }

}
