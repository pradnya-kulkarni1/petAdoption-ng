import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReferencePersonal } from '../models/reference-personal';

const URL: string = 'http://localhost:5248/api/referencepersonals'
@Injectable({
  providedIn: 'root'
})
export class ReferencePersonalService {

  
  constructor(private http: HttpClient) { }

getReferencePersonals():Observable<ReferencePersonal[]>{
  return this.http.get<ReferencePersonal[]>(URL);
}

postReferencePersonal(Referencepersonal: ReferencePersonal):Observable<ReferencePersonal>{
  return this.http.post<ReferencePersonal>(URL, Referencepersonal);
}

updateReferencePersonal(ReferencePersonal: ReferencePersonal):Observable<ReferencePersonal> {
  return this.http.put(URL + '/'+ReferencePersonal.id,ReferencePersonal) as Observable<ReferencePersonal>;
}

deleteReferencePersonal(id: number): Observable<boolean>{
  return this.http.delete(URL+"/"+id) as Observable<boolean>;
}
}
