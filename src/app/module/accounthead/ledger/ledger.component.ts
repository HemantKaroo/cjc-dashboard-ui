import { Component, OnInit } from '@angular/core';
import { Customerdetails } from 'app/model/CustomerDetails/customerdetails';
import { CommonService } from 'app/module/common/common.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {

  constructor(private common:CommonService) { }
  custList:Customerdetails[];


  ngOnInit(): void {
    this.common.getDoc().subscribe(list=>{this.custList=list})
  }

}