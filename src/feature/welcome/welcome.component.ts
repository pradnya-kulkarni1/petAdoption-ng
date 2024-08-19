import { AfterViewInit, Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Pet } from '../../app/models/pet';
import { PetService } from '../../app/services/pet.service';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { SystemService } from '../../app/services/system.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit, AfterViewInit {
  pets: Pet[] = [];
  isUser: boolean = false;
  welcomeMsg?: string = undefined;

  @ViewChild(MatSidenav) sidenav!:  MatSidenav;

  constructor(
    private petSvc: PetService, 
    private observer: BreakpointObserver,
    private cdr: ChangeDetectorRef,
    private systemSvc: SystemService
  ) {}

  ngOnInit(): void {
    this.petSvc.getPets().subscribe({
      next: (resp) => {
        this.pets = resp;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {}
    });

    if(this.systemSvc.loggedInUser.id != 0){
      this.welcomeMsg = "Hi, "+ this.systemSvc.loggedInUser.firstname;
      this.isUser = true;
    }
  }

  ngAfterViewInit(): void {

    this.sidenav.close();
    console.log('sidenav should be closed');
    if (window.innerWidth <= 800) {
      this.sidenav.mode = 'over';
      this.sidenav.close();
    } else {
      this.sidenav.mode = 'side';
      this.sidenav.open();
    }
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
      this.cdr.detectChanges();  // Trigger change detection manually
    });
  }

  toggleSidenav(){
    console.log('Toggle clicked');
    this.sidenav.toggle();

  }


}
