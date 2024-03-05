import { Component, Input } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-item',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.css']
})
export class CustomerItemComponent {
  @Input() customer: Customer = {
    customerId: 0,
    firstName: "Test",
    lastName: "User",
    birthdate: new Date(),
    phoneNumbers: [],
    emails: [],
    addresses: []
  };

  constructor(private data: CustomerService) { }

  onDelete() {
    console.log("deleting", this.customer);
    this.data.deleteCustomer(this.customer.customerId);
  }
}
