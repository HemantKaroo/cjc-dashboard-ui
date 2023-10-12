import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from 'app/login/login.component';
import { Empreg } from 'app/model/empreg';
import { Enquirydetails } from 'app/model/enquirydetails';
import { CommonService } from 'app/module/common/common.service';

@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.css']
})
export class EmploginComponent implements OnInit {
  // datalist:Enquirydetails[];
  emplist:Empreg[];
  u: user = {
    username: "",
    password: "",
    repassword: "",
    email: ""
  };
  constructor(private router: Router, private fb:FormBuilder,private common:CommonService) { }

  username: string='';
  password:string='';
  ngOnInit() {
    this.common.getemplist().subscribe(list1 => this.emplist=list1);
   
  }
  login(u) {
    console.log("login called");
    console.log(u.username,u.password);
    

    //Employee Registration
    if (u.username === 'sdkadmin' && u.password === 'sdkadmin') {
      alert("Admin Login Successfull");
      console.log(u.username,u.password);
      sessionStorage.setItem('role', 'bankempreg');
      this.router.navigateByUrl("role/bankempreg");
    }

// Employee Login
{
  for(let i=0 ; i< this.emplist.length; i++)
  {
    if (this.emplist[i].userName ==u.username && this.emplist[i].passWord == u.password )
     {
      
      console.log(u.username,u.password);
      if(this.emplist[i].email=="ujwal@gmail.com")
      {
        alert("Customer Executive Login Successfull");
        sessionStorage.setItem('role', 'registration');
        this.router.navigateByUrl("role/registration");
      }
      if (this.emplist[i].email=="prajwal@gmail.com")
      {
        alert("Operation Head Login Successfull");
        sessionStorage.setItem('role', 'oh');
        this.router.navigateByUrl("role/oh");
      }
      if (this.emplist[i].email=="pratik@gmail.com")
      {
        alert("Document Control Login Successfull");
        sessionStorage.setItem('role', 'doc');
        this.router.navigateByUrl("role/doc");
      }
      if (this.emplist[i].email=="rajat@gmail.com")
      {
        alert("Credit Manager Login Successfull");
        sessionStorage.setItem('role', 'cm');
        this.router.navigateByUrl("role/cm");
        
      }
      if (this.emplist[i].email=="shiwani@gmail.com")
      {
        alert("Account Head Login Successfull");
        sessionStorage.setItem('role', 'ah');
        this.router.navigateByUrl("role/ah");
      }
     }
   }
  } 
}
signup(u)
{
    console.log("signup");
}
}
