import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {
  
  customerForm: FormGroup = this.fb.group({
    customerId: [0],
    firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20) ]],
    birthdate: [new Date()],
    phoneNumbers: this.fb.array([]),
    emails: this.fb.array([]),
    addresses: this.fb.array([])
  });

  constructor(private fb: FormBuilder, private data: CustomerService) {

  }

  initForm() {
    this.customerForm = this.fb.group({
      customerId: [0],
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      birthdate: [new Date()],
      phoneNumbers: this.fb.array([]),
      emails: this.fb.array([]),
      addresses: this.fb.array([])
    })
  }

  get phoneNumbers() {
    return this.customerForm.get('phoneNumbers') as FormArray;
  }

  addPhone() {
    this.phoneNumbers.push(this.fb.group({
      phoneId: [0],
      phoneNumber: ['']
    }));
  }

  onSubmit() {
    console.log(this.customerForm.value);

    // create a new object of our model type
    let customer: Customer = {
      customerId: this.customerForm.get('customerId')?.value,
      firstName: this.customerForm.get('firstName')?.value,
      lastName: this.customerForm.get('lastName')?.value,
      birthdate: this.customerForm.get('birthdate')?.value,
      phoneNumbers: this.customerForm.get('phoneNumbers')?.value,
      emails: this.customerForm.get('emails')?.value,
      addresses: this.customerForm.get('addresses')?.value
    }

    this.data.createCustomer(customer);
    this.initForm();
  }

}
