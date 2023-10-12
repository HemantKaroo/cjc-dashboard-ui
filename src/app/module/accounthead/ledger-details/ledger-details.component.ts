import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customerdetails } from 'app/model/CustomerDetails/customerdetails';
import { CommonService } from 'app/module/common/common.service';
import * as moment from 'moment';
import { data } from 'jquery';


@Component({
  selector: 'app-ledger-details',
  templateUrl: './ledger-details.component.html',
  styleUrls: ['./ledger-details.component.css']
})
export class LedgerDetailsComponent implements OnInit {
  customer: Customerdetails;
  principal: number;
  interest: number;
  emi: number;
  date: Date;
  defaultCounter:number;
  d:Date=new Date();
  custId:number;
  count:number;
  constructor(private routes: ActivatedRoute, private common: CommonService) { }

  ngOnInit(): void {
    this.routes.paramMap.subscribe(param1 => {
      let cusId = param1.get('customerid');
      let custId = parseInt(cusId);
      this.common.getDocument(custId).subscribe(data => {
        this.customer = data;
        this.emi = data.offerletter.emidetails.emiamountmonthly;
        this.principal = data.offerletter.loanamount
        this.interest = data.offerletter.rateofinterest / 12;
        this.defaultCounter=data.ledger.defaultercount;
        let momentVariable = moment(data.offerletter.emidetails.nextemiduedate, 'DD-MM-YYYY');
        (momentVariable.format('YYYY-MM-DD'));
       this.date=new Date((momentVariable.format('YYYY-MM-DD')));
       this.custId=this.customer.customerid;
       this.count= this.customer.ledger.defaultercount
       console.log(this.date.getDate())
       console.log(this.customer.customerid); 
      })
    

    })
    
  }
  counter(i: number) {
    return new Array(i);
  }
  
  defCounter(){
    // this.common.getDocument(this.custId).subscribe(cust=>{
    //   this.customer=cust;
    //   this.count=cust.ledger.defaultercount+1;
    // });
    console.log("Before posting "+this.count)
    this.count=this.count+1;
    this.common.addCounter(this.custId,this.count).subscribe();
    console.log("After posting "+this.count)
    window.location.reload();
  }
  sendToTele(){
    alert("Defaulter list has been sent to Tele Caller")
  }
}
