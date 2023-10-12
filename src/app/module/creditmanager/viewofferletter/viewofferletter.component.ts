import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customerdetails } from 'app/model/CustomerDetails/customerdetails';
import { Offerletter } from 'app/model/CustomerDetails/offerletter';
import { CommonService } from 'app/module/common/common.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-viewofferletter',
  templateUrl: './viewofferletter.component.html',
  styleUrls: ['./viewofferletter.component.css']
})
export class ViewofferletterComponent implements OnInit {
  mail:FormGroup
  selectAttachment:any;
  view:any;
  reader=new FileReader();
  constructor(private routes:ActivatedRoute, private common: CommonService,private location:Location,private fb:FormBuilder) { }

  offerobj :Offerletter;
  cust:Customerdetails;
  ngOnInit(): void {
    //  Observable
  this.routes.paramMap.subscribe(param1=>{
    let offId= param1.get('customerId');
    
    let offerId=parseInt(offId);
    this.common.getDocument(offerId).subscribe(data=>{this.cust=data;
    this.offerobj=this.cust.offerletter})
  })
  this.mail=this.fb.group({
    toEmail:[''],
    subject:[''],
    textBody:[''],
  })  
  }

  getback() {
    this.location.back();
   }

   generatepdf(){
   
    var data:any=document.getElementById("OfferLetterPdf");

    html2canvas(data).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      PDF.addImage(FILEURI, 'PNG', 0, 0, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });

  }
  onselectAttachment(event)
  {
    
    this.selectAttachment =event.target.files[0];
    this.reader.onload = e => this.view = this.reader.result;
       this.reader.readAsDataURL(this.selectAttachment);
  }
 custemail:Customerdetails;
  sendEmail(num:number)
  {
    const sendotherfield=JSON.stringify(this.mail.value);
    const fileupload=new FormData();
    fileupload.append("Attachment",this.selectAttachment);
    fileupload.append("email",sendotherfield);
    this.common.senddata(fileupload).subscribe();
    console.log("Original ID"+num)
    this.common.setemailstatus(num).subscribe();
    console.log("After ID"+num);
    alert("Offer Letter has been sent to: "+this.mail.controls.toEmail.value)
  }
  abc:number=0;
  offerlt()
  {
    this.abc=1;
  }
 

}
