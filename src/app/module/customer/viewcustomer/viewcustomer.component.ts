import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Enquirydetails } from 'app/model/enquirydetails';
import { CommonService } from 'app/module/common/common.service';

@Component({
  selector: 'app-viewcustomer',
  templateUrl: './viewcustomer.component.html',
  styleUrls: ['./viewcustomer.component.css']
})
export class ViewcustomerComponent implements OnInit {
  enq:Enquirydetails;
  constructor(public common:CommonService, private location:Location) { }

  ngOnInit(): void {
    this.common.getsingleenquiry().subscribe(data=> {this.enq=data;})
  }
}
