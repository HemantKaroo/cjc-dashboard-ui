import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProdServiceService } from 'app/module/common/prod-service.service';

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.css']
})
export class ProductaddComponent implements OnInit {
  addProduct:FormGroup;
  constructor(public common:ProdServiceService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.addProduct=this.fb.group({
      id:[],
      productName:[''],
      productPrice:[],
      productDesc:[''],
    })  
  }
  saveProd()
  {
    alert("HHHH");
    this.common.addProd(this.addProduct.value).subscribe();
    alert("Product Save Successfully");
  }
}
