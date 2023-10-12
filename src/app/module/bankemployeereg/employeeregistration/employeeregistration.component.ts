import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'app/module/common/common.service';


@Component({
  selector: 'app-employeeregistration',
  templateUrl: './employeeregistration.component.html',
  styleUrls: ['./employeeregistration.component.css']
})
export class EmployeeregistrationComponent implements OnInit {
  empreg:FormGroup
  fullName:string;
  email:string;
  mobileNumber:number;
  userName:string;
  passWord:string
  constructor(private fb:FormBuilder,private common:CommonService) { }

  ngOnInit(): void {
    this.empreg = this.fb.group({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      mobileNumber: new FormControl('', [Validators.required]),
      userName: new FormControl('', [Validators.required]),
      passWord: new FormControl('', [Validators.required]),
    })
  }
  onSubmit()
  {
    alert("In OnSubmit");
    this.common.addEmpReg(this.empreg.value).subscribe();
    alert("Emp Save Success");
    window.location.reload();
    
  }
}
