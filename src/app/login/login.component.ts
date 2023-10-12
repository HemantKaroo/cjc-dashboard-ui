import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Empreg } from 'app/model/empreg';
import { Enquirydetails } from 'app/model/enquirydetails';
import { CommonService } from 'app/module/common/common.service';
export interface user {
  username: string;
  password: string;
  repassword: string;
  email: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  datalist:Enquirydetails[];
  // emplist:Empreg[];
  u: user = {
    username: "",
    password: "",
    repassword: "",
    email: ""
  };
  constructor(private router: Router, private fb:FormBuilder,private common:CommonService) {}
  username: string='';
  password:string='';
  ngOnInit() {
    this.common.getenquirydetails().subscribe(list => this.datalist=list);
    alert("In Login")
  }
  login(u) {
    console.log("login called");
    console.log(u.username,u.password);
    
   
// Customer Login
{
  for(let i=0 ; i< this.datalist.length; i++)
  {
    if (this.datalist[i].userName ==u.username && this.datalist[i].passWord == u.password ) 
    {
      alert("Customer Login Successfull");
      console.log(u.username,u.password);
      this.common.getusername(u.username);
      sessionStorage.setItem('role', 'customer');
      this.router.navigateByUrl("role/customer");
    }
  }
}
}
signup(u)
{
    console.log("signup");
}
}


    // if (u.username === 'ad' && u.password === 'ad') {
    //   console.log('in admin');
    //   sessionStorage.setItem('role', 'admin');
    //   this.router.navigateByUrl("role/admin/adminbash");
    // }
    // if (u.username === 'emp' && u.password === 'emp') {
    //   console.log('in emp');
    //   sessionStorage.setItem('role', 'emp');
    //   this.router.navigateByUrl("role/emp/empdash");
    // }
    // if (u.username === 'oe' && u.password === 'oe') {
     
    //   sessionStorage.setItem('role', 'operation');
    //   this.router.navigateByUrl("role/operation/oedash");
    // }
    // if (u.username === 'cm' && u.password === 'cm') {
    //   console.log(u.username,u.password);
    //   sessionStorage.setItem('role', 'cr');
    //   this.router.navigateByUrl("role/cr/credit");
    // }
    // if (u.username === 're' && u.password === 're') {
    //   console.log(u.username,u.password);
    //   sessionStorage.setItem('role', 'relation');
    //   this.router.navigateByUrl("role/relation/oecustomer");
    // }
    // if (u.username === 'abc' && u.password === 'abc') {
    //   console.log(u.username,u.password);
    //   sessionStorage.setItem('role', 'ab');
    //   this.router.navigateByUrl("role/ab/abcdash");
    // }
    // if (u.username === 'prod' && u.password === 'prod') {
    //   console.log(u.username,u.password);
    //   sessionStorage.setItem('role', 'product');
    //   this.router.navigateByUrl("role/product/addproduct");
    // }
    
    // if (u.username === 'reg' && u.password === 'reg') {
    //   console.log(u.username,u.password);
    //   sessionStorage.setItem('role', 'registration');
    //   this.router.navigateByUrl("role/registration/newreg");
    // }
    
    

