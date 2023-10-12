import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Emidetail } from 'app/model/CustomerDetails/emidetail';
import { CommonService } from 'app/module/common/common.service';

@Component({
  selector: 'app-regofferletter',
  templateUrl: './regofferletter.component.html',
  styleUrls: ['./regofferletter.component.css']
})
export class RegofferletterComponent implements OnInit {
  offerlatterForm:FormGroup;
  emi:Emidetail;
  constructor(private fb:FormBuilder,private common: CommonService,private locations:Location,private routes:ActivatedRoute) { }

  customeridoffer:number;
  ngOnInit(): void {
    this.routes.paramMap.subscribe(param1 => {
      let cusId = param1.get('customerId');
      let custId = parseInt(cusId);
      this.customeridoffer=custId;
    })
    this.offerlatterForm=this.fb.group(
      {
        currentloanid:[],
        loanno:[],
        emidetails:this.fb.group({
          emiid:[],
          emiamountmonthly:[],
          nextemiduedate:[''],
          previousemistatus :[''],
        }),
        loanamount:[],
        rateofinterest:[],
        tenure:[],
        totalamounttobepaid:[],
        processingfees:[],
        totalinterest:[],
        sanctiondate:[''],
        remark:[''],
        status:[''],
      }
    )
  }

  back()
  {
  this.locations.back();
  }
  onSubmit()
  {
    if(this.offerlatterForm.valid)
      {
       
        this.common.saveOfferlatter(this.offerlatterForm.value,this.customeridoffer).subscribe();
        this.locations.back();
      } 
  }

  extraloanAmount: number = 200000;
  extratenure: number = 10;
  extrainterest: number = 5;
  extraemi: number = 0;
  cal() {
    var outstandingAmount =
      Number(this.extraloanAmount) +
      Number(this.extraloanAmount * (this.extrainterest / 100) * this.extratenure);
    this.extraemi = outstandingAmount / this.extratenure;
  }
}
