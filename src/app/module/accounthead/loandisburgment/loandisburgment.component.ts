import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'app/module/common/common.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-loandisburgment',
  templateUrl: './loandisburgment.component.html',
  styleUrls: ['./loandisburgment.component.css']
})
export class LoandisburgmentComponent implements OnInit {
  loandisform:FormGroup;
  constructor(private fb:FormBuilder,private common: CommonService,private locations:Location,private routes:ActivatedRoute) { }
  loandist:number;
  ngOnInit(): void {
    this.routes.paramMap.subscribe(param1 => {
      let cusId = param1.get('customerId');
      let custId = parseInt(cusId);
      this.loandist=custId;
    })

    this.loandisform=this.fb.group(
      {
       
        loandisid:[],
        loancaseno:[],
        agreementdate:[''],
        amountpaytype:[''],
        totalamount:[],
        bankname:[''],
        accountnumber:[],
        ifsccode:[],
        accounttype:[''],
        transferamount:[],
        paymentstatus:[''],
        amountpaiddate:['']
      }
    )
  }
  onSubmit()
  {
    if(this.loandisform.valid)
      {
        
        this.common.saveDis(this.loandisform.value,this.loandist).subscribe();
        alert("Payment is made to Showroom Dealer");
      } 
  }

}
