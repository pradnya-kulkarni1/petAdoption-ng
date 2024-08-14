import { Component, OnInit } from '@angular/core';
import { Breed } from '../../../app/models/breed';
import { BreedService } from '../../../app/services/breed.service';

@Component({
  selector: 'app-breed-list',
  templateUrl: './breed-list.component.html',
  styleUrl: './breed-list.component.css'
})
export class BreedListComponent implements OnInit{
  title: string = "Breed-List";
  breeds?: Breed[]=undefined;


  constructor(private breedSvc:BreedService){}

  ngOnInit(): void{

    this.breedSvc.getBreeds().subscribe({
      next:(resp)=>{
        this.breeds = resp;
      },
      error:(err)=> {
        console.log(err);
      },
      complete:()=> {}
    });

  }

}
