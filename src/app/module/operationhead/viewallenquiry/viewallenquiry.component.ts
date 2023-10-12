import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
  cibilscore:number;
  cibilid:number;
  clickapprove:any;
  constructor(public common:CommonService, private location:Location) { }
  cibilok:any;
  appravalstatus:any;
  ngOnInit(): void {
    this.common.getenquirydetails().subscribe(data=> {this.enq=data;})
  }
  clickCIBIL(id:number,pan:string)
  {
     this.common.getCibil(id,pan).subscribe(data1=> {this.cibilscore=data1;})
   // this.cibilscore=550;
    this.cibilid=id;
  }
  cibilstatus1:Cibilstatus=new Cibilstatus();
  sendtoCE(eid1:number,status1:number,cibilscore1:number)
  {

    alert("status:"+status1);
    alert(this.cibilstatus1.eid=eid1);
    this.cibilstatus1.eid=eid1;
  this.cibilstatus1.status=status1;
  this.cibilstatus1.cibilscore=cibilscore1;
  
    this.common.sendcibilstatus(this.cibilstatus1).subscribe();
  }
 
//   deleteData(id:number){
//     window.location.reload();
//     this.common.deleteProd(id).subscribe();
// }

// editData(id:number,prod:Product)
// editData(prod:Product)
// {
//      this.common.addprod= Object.assign({},prod);
// }  
}
