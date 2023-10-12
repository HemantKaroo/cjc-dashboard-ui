import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeregistrationComponent } from './employeeregistration/employeeregistration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const employeerouting: Routes = [
  {path: "empreg", component:EmployeeregistrationComponent },
]

@NgModule({
  declarations: [EmployeeregistrationComponent],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule,RouterModule.forChild(employeerouting)
  ],
  exports:[EmployeeregistrationComponent],
})
export class BankemployeeregModule { }
