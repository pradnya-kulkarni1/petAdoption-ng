import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../models/pet';

const URL: string = 'http://localhost:5248/api/pets'
@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) { }

  getPets():Observable<Pet[]>{
    return this.http.get<Pet[]>(URL);
  }

  postPet(pet: Pet):Observable<Pet>{
    return this.http.post<Pet>(URL, pet);
  }
  
  updatePet(Pet: Pet):Observable<Pet> {
    return this.http.put(URL + '/'+Pet.id,Pet) as Observable<Pet>;
  }
  
  deletePet(id: number): Observable<boolean>{
    return this.http.delete(URL+"/"+id) as Observable<boolean>;
  }
}
