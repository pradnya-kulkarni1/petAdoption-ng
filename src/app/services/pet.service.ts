import { Injectable } from '@angular/core';

const URL: string = 'http://localhost:5248/api/pets'
@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor() { }
}
