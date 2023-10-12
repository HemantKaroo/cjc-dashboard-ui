import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from 'app/module/common/common.service';

@Component({
  selector: 'app-enquiryform',
  templateUrl: './enquiryform.component.html',
  styleUrls: ['./enquiryform.component.css']
})
export class EnquiryformComponent implements OnInit {
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
        
        this.common.saveEnquiry(this.registerForm.value).subscribe();
        this.location.back();
      } 
  }

  statelist: Array<any> = 
  [
    { name: 'Maharashtra', cities: ['Pune', 'Mumbai', 'Aurangabad','Amravati','Nagpur','Nanded'] },
    { name: 'UP', cities: ['Kanpur','Lucknow','Ayodhya'] },
    { name: 'Delhi', cities: ['Gurgao','New Delhi','Lal Kot or Qila Rai Pithora'] },
    { name: 'MP', cities: ['Indore','Bhopal','Jabalpur','Gwalior'] }
  ];
  cities: Array<any>;
    changestate(htmlin) 
    {
      
    this.cities = this.statelist.find(data => data.name == htmlin).cities;
  }

}

