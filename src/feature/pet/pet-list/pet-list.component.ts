import { Component, OnInit } from '@angular/core';
import { Pet } from '../../../app/models/pet';
import { PetService } from '../../../app/services/pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrl: './pet-list.component.css'
})
export class PetListComponent implements OnInit {
  title: string = "Pet-List";
  pets?: Pet[]=undefined;


  constructor(private petSvc:PetService){}

  ngOnInit(): void{

    this.petSvc.getPets().subscribe({
      next:(resp: Pet[] | undefined)=>{
        this.pets = resp;
      },
      error:(err: any)=> {
        console.log(err);
      },
      complete:()=> {}
    });

  }

}
