import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loancalculator',
  templateUrl: './loancalculator.component.html',
  styleUrls: ['./loancalculator.component.css']
})
export class LoancalculatorComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  loancal:FormGroup;
  loanAmount: any;
  tenure: any;
  interest:any;
  emi: any;
  totalAmountPaid:any
  onlyInterest:any
  ngOnInit(): void {
    this.loancal = this.fb.group({
      loanAmount: new FormControl('', [Validators.required]),
      tenure: new FormControl('', [Validators.required]),
      interest: new FormControl('', [Validators.required]),
    })
  }
  // loanAmount: any;
  // tenure: any;
  // interest:any;
  // emi: any = 0;
  // cal() {
  //   alert("In Calculator")
  //   var outstandingAmount =
  //   Number (this.loanAmount) + Number (this.loanAmount * (this.interest / 100) * this.tenure);
  //   this.emi = outstandingAmount / this.tenure;
  // }

  onSubmit()
  {
    if (this.loancal.valid)
    {
      // Link for Calculation: https://emicalculator.net/
      alert("In OnSubmit")
      var r= ((this.interest/12)/100)
      var a= ((1+r)**this.tenure)
      var b = (((1+r)**this.tenure)-1)
      var c = this.loanAmount*r
      this.emi=(c*(a/b))
      this.totalAmountPaid=this.emi*this.tenure
      this.onlyInterest=this.totalAmountPaid-this.loanAmount;
    //   var outstandingAmount =
    //  Number (this.loanAmount) + Number (this.loanAmount * (this.interest / 100) * this.tenure);
    //   this.emi = outstandingAmount / this.tenure;
      // console.log(this.loanAmount)
      // console.log(outstandingAmount);
      // console.log(this.emi);
    }
  }
}