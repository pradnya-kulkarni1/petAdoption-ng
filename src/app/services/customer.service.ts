import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

const URL: string = 'http://localhost:5248/api/customers'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  constructor(private http: HttpClient) { }

getCustomers():Observable<Customer[]>{
  return this.http.get<Customer[]>(URL);
}

postCustomer(Customer: Customer):Observable<Customer>{
  return this.http.post<Customer>(URL, Customer);
}

updateCustomer(Customer: Customer):Observable<Customer> {
  return this.http.put(URL + '/'+Customer.id,Customer) as Observable<Customer>;
}

deleteCustomer(id: number): Observable<boolean>{
  return this.http.delete(URL+"/"+id) as Observable<boolean>;
}
}
