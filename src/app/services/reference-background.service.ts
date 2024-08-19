import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReferenceBackground } from '../models/reference-background';

const URL: string = 'http://localhost:5248/api/referencebackgrounds'

@Injectable({
  providedIn: 'root'
})
export class ReferenceBackgroundService {

  constructor(private http: HttpClient) { }

getReferencebackgrounds():Observable<ReferenceBackground[]>{
  return this.http.get<ReferenceBackground[]>(URL);
}

postReferencebackground(Referencebackground: ReferenceBackground):Observable<ReferenceBackground>{
  return this.http.post<ReferenceBackground>(URL, Referencebackground);
}

updateReferencebackground(Referencebackground: ReferenceBackground):Observable<ReferenceBackground> {
  return this.http.put(URL + '/'+Referencebackground.id,Referencebackground) as Observable<ReferenceBackground>;
}

deleteReferencebackground(id: number): Observable<boolean>{
  return this.http.delete(URL+"/"+id) as Observable<boolean>;
}

}
