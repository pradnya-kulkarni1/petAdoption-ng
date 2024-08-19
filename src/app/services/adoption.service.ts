import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adoption } from '../models/adoption';

const URL: string = 'http://localhost:5248/api/adoptions'

@Injectable({
  providedIn: 'root'
})
export class AdoptionService {
  constructor(private http: HttpClient) { }

getAdoptions():Observable<Adoption[]>{
  return this.http.get<Adoption[]>(URL);
}

postAdoption(Adoption: Adoption):Observable<Adoption>{
  return this.http.post<Adoption>(URL, Adoption);
}

updateAdoption(Adoption: Adoption):Observable<Adoption> {
  return this.http.put(URL + '/'+Adoption.id,Adoption) as Observable<Adoption>;
}

deleteAdoption(id: number): Observable<boolean>{
  return this.http.delete(URL+"/"+id) as Observable<boolean>;
}
}
