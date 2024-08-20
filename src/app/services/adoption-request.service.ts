import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdoptionRequest } from '../models/adoption-request';

const URL: string = 'http://localhost:5248/api/adoptionrequests'

@Injectable({
  providedIn: 'root'
})
export class AdoptionRequestService {

  constructor(private http: HttpClient) { }

getAdoptionRequests():Observable<AdoptionRequest[]>{
  return this.http.get<AdoptionRequest[]>(URL);
}

postAdoptionRequest(AdoptionRequest: AdoptionRequest):Observable<AdoptionRequest>{
  return this.http.post(URL, AdoptionRequest) as Observable<AdoptionRequest>;
}

updateAdoptionRequest(AdoptionRequest: AdoptionRequest):Observable<AdoptionRequest> {
  return this.http.put(URL + '/'+AdoptionRequest.id,AdoptionRequest) as Observable<AdoptionRequest>;
}

deleteAdoptionRequest(id: number): Observable<boolean>{
  return this.http.delete(URL+"/"+id) as Observable<boolean>;
}

rejectAdoptionRequest(id:number, rejectionReason: string):Observable<AdoptionRequest>{
  return this.http.post<AdoptionRequest>(URL+'/reject/'+id, rejectionReason) as Observable<AdoptionRequest>;
}
approveAdoptionRequest(id:number):Observable<AdoptionRequest>{
  return this.http.post<AdoptionRequest>(URL+'/approve/'+id,'') as Observable<AdoptionRequest>;
}

onholdAdoptionRequest(id:number):Observable<AdoptionRequest>{
  return this.http.post<AdoptionRequest>(URL+'/onhold/'+id,'') as Observable<AdoptionRequest>;
}

}
