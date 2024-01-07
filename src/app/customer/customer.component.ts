import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.Service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{
    id:any;
    title!: string;
  constructor(private fb: UntypedFormBuilder,
    private customerService:CustomerService,
    private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router) {}
      ngOnInit() {
        this.id= this.route.snapshot.queryParamMap.get('id');
  
        this.title = 'Add Customer';
        if (this.id) {
            // edit mode
            this.title = 'Edit Customer';
            this.customerService.getById(this.id)
                .pipe(first())
                .subscribe(x => {
                    this.checkoutForm.patchValue(x);
                });
        }
      }
          get f() { return this.checkoutForm.controls; }
    checkoutForm = this.formBuilder.group({
    firstName: ['',Validators.required],
    lastName: ['',Validators.required],
    email: ['',Validators.required]
  });
      private saveUser() {
        // create or update user based on id param
        return this.id
            ? this.customerService.update(this.id!, this.checkoutForm.value)
            : this.customerService.create(this.checkoutForm.value);
    }
      submitForm(): void {
      console.log('submitted', this.checkoutForm.value);
         this.saveUser()
            .pipe(first())
            .subscribe({
                next: () => {
                  if(this.id){alert("user updated");}
                    else alert("user saved");
                    this.router.navigateByUrl('/');
                },
                error: error => {
                    alert("Provide a valid email format like abc@.c")
                }
            })
    }
}
