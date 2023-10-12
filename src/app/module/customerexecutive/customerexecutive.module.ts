import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewallenquiryComponent } from './viewallenquiry/viewallenquiry.component';
import { ViewofferletterlistComponent } from './viewofferletterlist/viewofferletterlist.component';


const custExecutiveRouting: Routes=[
  {path:'newreg', component:RegistrationComponent},
  {path: "viewallenq", component:ViewallenquiryComponent },
  {path: "viewoffertletterlist", component:ViewofferletterlistComponent},
];

@NgModule({
  declarations: [RegistrationComponent, ViewallenquiryComponent, ViewofferletterlistComponent,],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    RouterModule.forChild(custExecutiveRouting) 
  ],
  exports:[RegistrationComponent],
})
export class CustomerexecutiveModule { }
