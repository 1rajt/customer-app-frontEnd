import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customer/customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { CustomerViewComponent } from './customer-view/customer-view.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerComponent,
    CustomerViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, HttpClientModule,
       RouterModule.forRoot([
       { path: '', component: CustomersComponent },
      // { path: 'category/:category', component: NewspaperComponent },
      // { path: 'news/:newsId', component: NewsDetailsComponent },
      {path:'customers/add',component: CustomerComponent},
      {path:'customers/details',component: CustomerViewComponent},
          // {path:'subscribe',component: SubscribsitionComponent},

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
