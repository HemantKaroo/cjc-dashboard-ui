import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { Cibilstatus } from 'app/model/CustomerDetails/cibilstatus';
import { Enquirydetails } from 'app/model/enquirydetails';
import { CommonService } from 'app/module/common/common.service';

@Component({
  selector: 'app-viewallenquiry',
  templateUrl: './viewallenquiry.component.html',
  styleUrls: ['./viewallenquiry.component.css']
})
export class ViewallenquiryComponent implements OnInit {
enq:Enquirydetails[];
cibilStatus:Cibilstatus[];
  constructor(public common:CommonService, private location:Location,private router:Router) { }
  cibilok:number;
  newid:number;
  
  ngOnInit(): void {
    this.common.getenquirydetails().subscribe(data=> {this.enq=data;})
    this.common.getcibilstatusCE().subscribe(data1=>{this.cibilStatus=data1})
  }
  counter:number;
  sendtoOH(eid2:number)
  {
    
    for(let i=0 ; i<this.cibilStatus.length; i++)
    {
      
      if (this.cibilStatus[i].eid==eid2)
      {
       
        this.cibilok=this.cibilStatus[i].status;
        this.newid=this.cibilStatus[i].eid  
        this.counter=1
        return
      } 
      else
      {
        this.counter=0;
      }
     }
    if(this.counter==0)
    {
      alert("Helooooo")
      this.newid=eid2;

      this.cibilok=3
    }
  }
  sendtoreg()
  {
    this.router.navigateByUrl("role/registration/newreg");
  }
}