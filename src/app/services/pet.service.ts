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
}
