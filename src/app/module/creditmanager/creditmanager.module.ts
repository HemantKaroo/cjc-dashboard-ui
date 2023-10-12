import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditmanagerComponent } from './creditmanager/creditmanager.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegofferletterComponent } from './regofferletter/regofferletter.component';
import { ViewofferletterComponent } from './viewofferletter/viewofferletter.component';


const routing: Routes = [
  {path: "credit", component:CreditmanagerComponent,
  children:[
    {
      path: "offerletterform/:customerId", component:RegofferletterComponent
    },{
      path: "offerletterview/:customerId", component:ViewofferletterComponent
    }
  ]
},
 
  
];

@NgModule({
  declarations: [CreditmanagerComponent, RegofferletterComponent, ViewofferletterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
     
    RouterModule.forChild(routing),
  ],
})
export class CreditmanagerModule { }
