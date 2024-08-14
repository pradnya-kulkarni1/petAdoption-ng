import { Component, OnInit, ViewChild } from '@angular/core';
import { Pet } from '../../app/models/pet';
import { PetService } from '../../app/services/pet.service';
import { MatSidenav } from '@angular/material/sidenav';
import{BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{
  pets :Pet[] = [];

  @ViewChild(MatSidenav) 
  sidenav!: MatSidenav;

  constructor(private petSvc: PetService, 
    private observer: BreakpointObserver
  ){}

 
  ngOnInit(): void{


    this.petSvc.getPets().subscribe({
      next: (resp)=> {
        this.pets = resp;
      },
      error:(err)=> {
        console.log(err);
      },
      complete: ()=> {}
    })

    
    this.observer.observe(['(max-width: 800px']).subscribe((res)=> {
      if (res.matches){
        this.sidenav.mode='over';
        this.sidenav.close();
      } else{
        this.sidenav.mode='side';
        this.sidenav.open();
      }
    });
    
  }

  


    

  }


