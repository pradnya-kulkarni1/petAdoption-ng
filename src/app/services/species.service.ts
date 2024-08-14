import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Species } from '../models/species';
import { Observable } from 'rxjs';

const URL: string = 'http://localhost:5248/api/species'

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private http: HttpClient) { }

  getSpeciess():Observable<Species[]>{
    return this.http.get<Species[]>(URL);
  }

  postSpecies(Species: Species):Observable<Species>{
    return this.http.post<Species>(URL, Species);
  }
  
  updateSpecies(Species: Species):Observable<Species> {
    return this.http.put(URL + '/'+Species.id,Species) as Observable<Species>;
  }
  
  deleteSpecies(id: number): Observable<boolean>{
    return this.http.delete(URL+"/"+id) as Observable<boolean>;
  }
}
