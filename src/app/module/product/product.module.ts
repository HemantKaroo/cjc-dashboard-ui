import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ProductaddComponent } from './productadd/productadd.component';

const prodrouting: Routes = [
  {path: "addproduct", component:ProductaddComponent },
  {path: "viewproduct", component:ViewProductComponent,
    children:[
      {
        path:'updateproduct',component:UpdateProductComponent
      }
    ] },
];

@NgModule({
  declarations: [AddProductComponent, ViewProductComponent, UpdateProductComponent, ProductaddComponent],
  imports: [
    CommonModule,ReactiveFormsModule,HttpClientModule,RouterModule.forChild(prodrouting)
  ],
  exports:[AddProductComponent, ViewProductComponent, UpdateProductComponent,ProductaddComponent]
})
export class ProductModule { }
