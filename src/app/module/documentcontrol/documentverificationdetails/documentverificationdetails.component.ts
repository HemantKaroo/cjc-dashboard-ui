import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customerdetails } from 'app/model/CustomerDetails/customerdetails';
import { DocInfo } from 'app/model/doc-info';
import { CommonService } from 'app/module/common/common.service';

@Component({
  selector: 'app-documentverificationdetails',
  templateUrl: './documentverificationdetails.component.html',
  styleUrls: ['./documentverificationdetails.component.css']
})
export class DocumentverificationdetailsComponent implements OnInit {

  
  docobj:Customerdetails;
  step = 1;

  constructor(private routes: ActivatedRoute, private common: CommonService, private fb: FormBuilder ) { }

  
  statusCheck: FormGroup;
  ngOnInit(): void {

    this.routes.paramMap.subscribe(param1 => {
      let cusId = param1.get('customerid');
      
      let custId = parseInt(cusId);
      this.common.getDocument(custId).subscribe(data => { this.docobj = data; })
     
    })
      //Document Status Form Group
   this.statusCheck =this.fb.group({
    salarySlipStatus: 0,
    adhaarCardStatus:0,
    panCardStatus: 0,
    itrStatus: 0,
    photostatus: 0,
    signatureStatus: 0,
    banckChequeStatus:0, 
    mortgageProofStatus: 0,
    customerIdStatus:0,
    firstName1: [''],
    middleName1: [''],
    lastName1: ['']

    
  })
  }
  next() {
    this.step++;
  }
  previous() {
    this.step--
  }

  //Document Status Collection
  custId:number;
  docInfo:DocInfo=new DocInfo();
  statCheck(){
    
    if(
      this.statusCheck.get("salarySlipStatus").value==1 &&
      this.statusCheck.get("adhaarCardStatus").value==1 &&
      this.statusCheck.get("panCardStatus").value==1 &&
      this.statusCheck.get("itrStatus").value==1 &&
      this.statusCheck.get("photostatus").value==1 &&
      this.statusCheck.get("signatureStatus").value==1 &&
      this.statusCheck.get("banckChequeStatus").value==1 &&
      this.statusCheck.get("mortgageProofStatus").value==1)
      {
     
     
      this.docInfo.status=1;
      this.docInfo.custId=this.statusCheck.get("customerIdStatus").value;
      this.docInfo.firstName=this.statusCheck.get("firstName1").value;
      this.docInfo.middleName=this.statusCheck.get("middleName1").value;
      this.docInfo.lastName=this.statusCheck.get("lastName1").value;
        this.common.okDocuments(this.docInfo).subscribe();
        
   
    }
    if(
      this.statusCheck.get("salarySlipStatus").value==0 ||
      this.statusCheck.get("adhaarCardStatus").value==0 ||
      this.statusCheck.get("panCardStatus").value==0 ||
      this.statusCheck.get("itrStatus").value==0 ||
      this.statusCheck.get("photostatus").value==0 ||
      this.statusCheck.get("signatureStatus").value==0 ||
      this.statusCheck.get("banckChequeStatus").value==0 ||
      this.statusCheck.get("mortgageProofStatus").value==0)
    {
     
      this.docInfo.status=0;
      this.docInfo.custId=this.statusCheck.get("customerIdStatus").value;
      this.docInfo.firstName=this.statusCheck.get("firstName1").value;
      this.docInfo.middleName=this.statusCheck.get("middleName1").value;
      this.docInfo.lastName=this.statusCheck.get("lastName1").value;
        this.common.okDocuments(this.docInfo).subscribe();
    }
    window.location.reload();
  }
 
}
