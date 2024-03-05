import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers$: BehaviorSubject<Customer[]> = new BehaviorSubject<Customer[]>([]);
  customer$: Subject<Customer> = new Subject<Customer>();

  constructor(private http: HttpClient) {
    this.getAllCustomers();
  }

  getAllCustomers() {
    console.log('getting all customers');
    this.http.get<Customer[]>("/api/Customers").subscribe(data => {
      this.customers$.next(data);
    });
  }

  getCustomerById(id: number) {
    // return a single customer
    this.http.get<Customer>("/api/Customers/" + id).subscribe(data => {
      this.customer$.next(data);
    })
  }

  createCustomer(cust: Customer) {
    //post
    this.http.post<Customer>("/api/Customers", cust).subscribe(data => {
      let arr = this.customers$.getValue();
      arr.push(data);
      this.customers$.next(arr);
    });
  }

  updateCustomer(id: number, cust: Customer) {
    // put
    return this.http.put<Customer>("/api/Customers/" + id, cust);
  }

  deleteCustomer(id: number) {
    // delete
    console.log('delete has fired');
    this.http.delete<any>("/api/Customers/" + id).subscribe(data => {
      this.getAllCustomers();
    });
  }
}
