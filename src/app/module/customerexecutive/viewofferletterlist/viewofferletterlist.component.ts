import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customerdetails } from 'app/model/CustomerDetails/customerdetails';
import { Offerletter } from 'app/model/CustomerDetails/offerletter';
import { CommonService } from 'app/module/common/common.service';

@Component({
  selector: 'app-viewofferletterlist',
  templateUrl: './viewofferletterlist.component.html',
  styleUrls: ['./viewofferletterlist.component.css']
})
export class ViewofferletterlistComponent implements OnInit {
custdetail:Customerdetails[];
offer:Offerletter[];
cust:Customerdetails[];

  constructor(public common:CommonService,private router:Router) { }

  ngOnInit(): void {
    this.common.getDoc().subscribe(data=>{this.cust=data;})
  }
  custsigncopy(num:number)
  {
    alert(num);
    this.common.abc(num).subscribe();
  }
}
