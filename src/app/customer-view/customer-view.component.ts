import { Component } from '@angular/core';
import { Customer } from '../models/customer';
@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent {
    customer:any ;
   ngOnInit() {
    var selectedCustomerJson = sessionStorage.getItem('selectedCustomer');
     if (selectedCustomerJson) {
    this.customer = JSON.parse(selectedCustomerJson);
} 
    }
}
