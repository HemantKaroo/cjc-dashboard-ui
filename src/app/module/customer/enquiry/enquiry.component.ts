import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from 'app/module/common/common.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {
  registerForm:FormGroup;
  constructor(private location:Location,private fb:FormBuilder,private common:CommonService) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group(
      {
          eid:[],
          firstName:[''],
          middleName:[''],
          lastName:[''],
          city:[''],
          state:[''],
          district:[''],
          pincode:[],
          dob:[''],
          email:[''],
          mobileNumber:[],
          pancardNumber:[''],
          userName:[''],
          passWord:['']
      })
      
  }
  back()
  {
  this.location.back();
  }
  onSubmit()
  {
    if(this.registerForm.valid)
      {
        alert(this.registerForm.get("mobileNumber").value);
        this.common.saveEnquiry(this.registerForm.value).subscribe();
        this.location.back();
      } 
  }

}
