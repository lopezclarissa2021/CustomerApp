import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    //this.execute(this.onSuccess, this.onFailure);
  }

  execute(success: Function, failure: Function) {
    try {
      success();
    } catch (ex) {
      failure();
    }
  }

  onSuccess() {
    // when successful:
    console.log("Success");
  }

  onFailure() {
    // on faulure:
    console.log("failed.");
  }

  title = 'Customer App Dashboard';
}
