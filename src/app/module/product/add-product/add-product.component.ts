import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProdServiceService } from 'app/module/common/prod-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addProduct:FormGroup
  constructor(public common:ProdServiceService, private fb:FormBuilder) { }

  ngOnInit(): void 
  {
    this.addProduct=this.fb.group({
      productName:[''],
      productPrice:[],
      productDesc:[''],
    })  
  }
  abc()
  {
    this.common.addProd(this.addProduct.value).subscribe();
    alert("Product Save Successfully")
  }
}
