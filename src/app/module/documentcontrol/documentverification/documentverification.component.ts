import { Component, OnInit } from '@angular/core';
import { Customerdetails } from 'app/model/CustomerDetails/customerdetails';
import { DocInfo } from 'app/model/doc-info';
import { CommonService } from 'app/module/common/common.service';

@Component({
  selector: 'app-documentverification',
  templateUrl: './documentverification.component.html',
  styleUrls: ['./documentverification.component.css']
})
export class DocumentverificationComponent implements OnInit {

  constructor(private common:CommonService) { }
  doclist:Customerdetails[];
  docInfo:DocInfo[];
  docOk:number[];
  backendStatus:number;
  idchk:number;
 
  ngOnInit(): void {
    this.common.getDoc().subscribe(list=>{this.doclist=list})
    this.common.getDocuments().subscribe(info=>{this.docInfo=info;})
         }

  cusId:number;
  di:DocInfo;
  random:number;

  checkDoc(id:number){
    this.common.getDoc1(id).subscribe(data=>{ this.di=data;});
    console.log(this.di.status +" "+this.di.custId);
    this.random=this.di.status
   this.cusId=this.di.custId;  
  }
  getStatus(st:number)
  {
    for(let j=0; j< this.docInfo.length; j++)
  {
    
    if (this.docInfo[j].custId==st) 
    {
        this.backendStatus=this.docInfo[j].status;
        this.idchk=this.docInfo[j].custId;        
    }
  }
 }
}
