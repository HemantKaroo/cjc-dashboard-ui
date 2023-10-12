import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from '../customerexecutive/registration/registration.component';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';

const customerrouting: Routes = [
  {path: "enquiry", component:EnquiryComponent },
  {path: "singlecustomer", component:ViewcustomerComponent },
]

@NgModule({
  declarations: [EnquiryComponent, ViewcustomerComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,HttpClientModule,RouterModule.forChild(customerrouting)
  ],
  exports:[EnquiryComponent],

})
export class CustomerModule { }
