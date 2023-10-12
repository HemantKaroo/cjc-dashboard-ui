import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customerdetails } from 'app/model/CustomerDetails/customerdetails';
import { CommonService } from 'app/module/common/common.service';

@Component({
  selector: 'app-accountheadview',
  templateUrl: './accountheadview.component.html',
  styleUrls: ['./accountheadview.component.css']
})
export class AccountheadviewComponent implements OnInit {

  doclist:Customerdetails[];
  constructor(private common:CommonService,private router:Router) { }

  ngOnInit(): void {
    
    this.common.getDoc().subscribe(info=>{this.doclist=info;})
  }

}
