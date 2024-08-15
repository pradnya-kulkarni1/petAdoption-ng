import { Component } from '@angular/core';
import { Species } from '../../../app/models/species';
import { SpeciesService } from '../../../app/services/species.service';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrl: './species-list.component.css'
})
export class SpeciesListComponent {
  title: string = "Species-List";
  speciess?: Species[]=undefined;


  constructor(private specieSvc:SpeciesService){}

  ngOnInit(): void{

    this.specieSvc.getSpeciess().subscribe({
      next:(resp: Species[] | undefined)=>{
        this.speciess = resp;
      },
      error:(err: any)=> {
        console.log(err);
      },
      complete:()=> {}
    });

  }

}


