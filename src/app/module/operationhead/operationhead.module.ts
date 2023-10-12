import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewallenquiryComponent } from './viewallenquiry/viewallenquiry.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const custExecutiveRouting: Routes=[
  {path: "viewallenq1", component:ViewallenquiryComponent },
];

@NgModule({
  declarations: [ViewallenquiryComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    RouterModule.forChild(custExecutiveRouting) 
  ]
})
export class OperationheadModule { }
