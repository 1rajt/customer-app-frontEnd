import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.Service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
    customers?: any[];
    customer:any;
    selectedId!: string;
   constructor(private customerService: CustomerService) {}
   ngOnInit() {
        this.customerService.getAll()
            .pipe(first())
            .subscribe(users => this.customers = users);
             var selectedCustomerJson = sessionStorage.getItem('selectedCustomer');
              if (selectedCustomerJson) {
              this.customer = JSON.parse(selectedCustomerJson);
              this.selectedId=this.customer.id;
          }
    }
    setCustomer(id:string, fName:string, lName:string, email:string, createdAt:Date, updatedAt:Date){
      var customer = {'id':id,'fname':fName,'lname':lName,'email':email, 'createdAt':createdAt, 'updatedAt':updatedAt };
     sessionStorage.setItem('selectedCustomer', JSON.stringify(customer));
    
    }
    deleteUser(id:string){
        alert("You are about to delete a user");
        this.customerService.delete(id)
            .pipe(first())
            .subscribe(() => this.customers = this.customers!.filter(x => x.id !== id));
    }

    }

