import { Component, OnInit } from '@angular/core';
import { AdoptionRequest } from '../../app/models/adoption-request';
import { User } from '../../app/models/user';
import { Customer } from '../../app/models/customer';
import { ReferencePersonal } from '../../app/models/reference-personal';
import { ReferenceBackground } from '../../app/models/reference-background';
import { AdoptionRequestService } from '../../app/services/adoption-request.service';
import { SystemService } from '../../app/services/system.service';
import { CustomerService } from '../../app/services/customer.service';
import { ReferencePersonalService } from '../../app/services/reference-personal.service';
import { ReferenceBackgroundService } from '../../app/services/reference-background.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adoption-request',
  templateUrl: './adoption-request.component.html',
  styleUrl: './adoption-request.component.css'
})
export class AdoptionRequestComponent implements OnInit{
  title: string = "Adoption - Request";
  adoptionRequest: AdoptionRequest = new AdoptionRequest(0);
  user: User = new User();
  customers: Customer[] = [];
  referenceP: ReferencePersonal[] = [];
  referenceB: ReferenceBackground[] = [];

  constructor(private adoptReqSvc:AdoptionRequestService, 
    private sysSvc: SystemService,
    private custSvc: CustomerService,
    private referencePSvc: ReferencePersonalService,
    private referenceBSvc: ReferenceBackgroundService,
    private router: Router
  ){}

ngOnInit(): void{
  this.sysSvc.checkLogin();
  this.adoptionRequest.user = this.sysSvc.loggedInUser;

  this.custSvc.getCustomers().subscribe({
    next:(resp)=>{
      this.customers = resp;
    },
    error:(err)=>{
      console.log(err);
    },
    complete:()=>{}
  });

  this.referencePSvc.getReferencePersonals().subscribe({
    next:(resp)=> {
      this.referenceP = resp;
    },
    error:(err)=>{
      console.log(err);
    },
    complete:()=>{}
  });

  this.referenceBSvc.getReferencebackgrounds().subscribe({
    next:(resp)=>{
      this.referenceB = resp;
    },
    error:(err)=>{
      console.log(err);
    },
    complete:()=>{}
  })
  
}
submit():void{

  this.adoptReqSvc.postAdoptionRequest(this.adoptionRequest).subscribe({
    next:(resp)=>{
      this.adoptionRequest = resp;
      this.router.navigateByUrl('review/review');
    },
    error:(err)=>{
      console.log("Error creating request: ", err);
    },
    complete:()=>{}
  });
}

}
