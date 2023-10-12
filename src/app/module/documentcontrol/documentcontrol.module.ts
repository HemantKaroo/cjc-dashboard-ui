import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentverificationComponent } from './documentverification/documentverification.component';
import { DocumentverificationdetailsComponent } from './documentverificationdetails/documentverificationdetails.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const docrouting: Routes = [
  {path: 'docv', component: DocumentverificationComponent,
  children:[
    {
      path:'docvlist/:customerid',component:DocumentverificationdetailsComponent
    }
  ]
}
]


@NgModule({
  declarations: [DocumentverificationComponent, DocumentverificationdetailsComponent],
  imports: [
    CommonModule,RouterModule.forChild(docrouting),FormsModule,
    ReactiveFormsModule
  ]
})
export class DocumentcontrolModule { }
