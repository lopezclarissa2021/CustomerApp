import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: BehaviorSubject<Customer[]> = this.data.customers$;


  constructor(private data: CustomerService) {

  }
    ngOnInit() {
      this.data.getAllCustomers(); 
    }
}
