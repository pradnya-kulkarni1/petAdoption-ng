import { Injectable } from '@angular/core';
import { Breed } from '../models/breed';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const URL: string = 'http://localhost:5248/api/breeds'
@Injectable({
  providedIn: 'root'
})
export class BreedService {


  
  constructor(private http: HttpClient) { }

  getBreeds():Observable<Breed[]>{
    return this.http.get<Breed[]>(URL);
  }

  postBreed(breed: Breed):Observable<Breed>{
    return this.http.post<Breed>(URL, breed);
  }
  
  updateBreed(Breed: Breed):Observable<Breed> {
    return this.http.put(URL + '/'+Breed.id,Breed) as Observable<Breed>;
  }
  
  deleteBreed(id: number): Observable<boolean>{
    return this.http.delete(URL+"/"+id) as Observable<boolean>;
  }
}
