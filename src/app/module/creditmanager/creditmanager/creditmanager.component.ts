import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customerdetails } from 'app/model/CustomerDetails/customerdetails';
import { DocInfo } from 'app/model/doc-info';
import { CommonService } from 'app/module/common/common.service';

@Component({
  selector: 'app-creditmanager',
  templateUrl: './creditmanager.component.html',
  styleUrls: ['./creditmanager.component.css']
})
export class CreditmanagerComponent implements OnInit {

  docInfo:DocInfo[];
  doc:number[];
  constructor(private common:CommonService,private router:Router) { }

  ngOnInit(): void {
    
    this.common.getDocuments().subscribe(info=>{this.docInfo=info;})
    
  }
num1:number;
cust1:Customerdetails
abc(num:number)
{
  this.common.getDocument(num).subscribe(data=>{this.cust1=data});
  this.num1=this.cust1.sanctionletter.loancaseno;
}
xyz()
{
  
}
}
