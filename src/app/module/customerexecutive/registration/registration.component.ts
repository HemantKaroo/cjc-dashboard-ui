import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from 'app/module/common/common.service';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  custRegForm: FormGroup;
  step: any = 1;
  reader=new FileReader();
  constructor(private fb: FormBuilder,private common:CommonService) { }

  ngOnInit(): void {
    this.custRegForm = this.fb.group({
      customerid: [],
      customerfirstname: [''],
      customermiddlename: [''],
      customerlastname: [''],
      customerdob: [''],
      customergender: [''],
      customeremail: [''],
      customermobilenumber: [''],
      customeradditionalmobilenumber: [''],
      customeramountpaidforcar: [''],
      customertotalloanrequired: [''],
      occupation: this.fb.group({
        occupationid: [''],
        occupationtype: [''],
        salary: [''],
        remainingWorkingPeriod: [''],
        designation: [''],
        // salrySlip: [''],
      }),

      documents: this.fb.group({
        documentID: [],
        qualification: [''],
        //addharcard: [''],
       // pancard: [''],
       // lastthreeyearITR: [''],
        //photo: [''],
        //signature: [''],
       // bankcheque: [''],
      }),
      currentaddress: this.fb.group({
        localaddressid: [],
        areaname: [''],
        cityname: [''],
        district: [''],
        state: [''],
        pincode: [''],
        housenumber: [''],
        streetname: [''],

      }),
      permentaddress: this.fb.group({
        permentaddressid: [],
        areaname: [''],
        cityname: [''],
        district: [''],
        state: [''],
        pincode: [''],
        housenumber: [''],
        streetname: [''],
      }),
      mortagagedetail: this.fb.group({
        mortgageid: [],
        mortgagepropertyvalue: [''],
       // mortgagepropertyproof: [''],
        mortgagepropertytype: [''],
        mortgageloanonproperty: [''],

      }),
      previousloan: this.fb.group({
        previousLoanid: [],
        previousLoanamount: [''],
        previousloantenure: [''],
        previousloanpaidamount: [''],
        previousloanremainingamount: [''],
        previousbankloandetails: this.fb.group({ //check 1
          branchid: [],
          branchname: [''],
          branchcode: [''],
          branchtype: [''],
          ifsccode: [''],
          micrcode: [''],
          conatctnumber: [''],
          bankaddress: [''],
          email: [''],
        }),

        previousloanstatus: [''],

      }),
      dealeraccountdetails: this.fb.group({ //check 2
        accountid: [],
        accounttype: [''],
        accountholdername: [''],
        accountnumber: [''],
      }),
      guarantordetail: this.fb.group({
        gid: [],
        guarantorname: [''],
        relationwithclient: [''],
        profession: [''],
        mobileno: [''],
        address: [''],
        pincode: [''],
        city: [''],
        district: [''],
        state: [''],
        country: [''],
        aadharno: [''],
        panno: [''],

      }),
      cibil: this.fb.group({
        cibilid: [],
        pannumber: [''],
        cibilscore: [''],
        cibilscoredatetime: [''],
        status: [''],
        remark: [''],
      }),
      offerletter: this.fb.group({
        currentloanid: [],
        loanno: [''],
        emidetails: this.fb.group({
          emiid: [],
          emiamountmonthly: [''],
          nextemiduedate: [''],
          previousemistatus: [''],
        }),
        loanamount: [''],
        rateofinterest: [''],
        tenure: [''],
        totalamounttobepaid: [''],
        processingfees: [''],
        totalinterest: [''],
        sanctiondate: [''],
        remark: [''],
        status: [''],

      }),
      sanctionletter: this.fb.group({
        sanctionid: [],
        loancaseno: [''],
      }),
      ledger: this.fb.group({
        ledgerid: [],
        ledgercreateddate: [''],
        totalloanamount: [''],
        payableamountwithinterest: [''],
        tenure: [''],
        monthlyemi: [''],
        amountpaidtilldate: [''],
        remainingamount: [''],
        nextemidatestart: [''],
        nextemidateend: [''],
        defaultercount: [''],
        previousemitstatus: [''],
        currentmonthemistatus: [''],
        loanenddate: [''],
        loanstatus: [''],
      }),
      loandisbursment: this.fb.group({ 
        loandisid: [],
        loancaseno: [''],
        agreementdate: [''],
        amountpaytype: [''],
        totalamount: [''],
        bankname: [''],
        accountnumber: [''],
        ifsccode: [''],
        accounttype: [''],
        transferamount: [''],
        paymentstatus: [''],
        amountpaiddate: [''],
      })
    })

  }
  next() {
    this.step = this.step + 1
  }
  previous() {
    this.step = this.step - 1
  }
  sameAddress() {

  }

  
  //Document Selection Using Events

  //Salary Slip
  salarySlip: any;
  imgSalarySlip:any;
  onSelectSalarySlip(event) {
    this.salarySlip = event.target.files[0];
    this.reader.onload=e=>this.imgSalarySlip=this.reader.result;
    this.reader.readAsDataURL(this.salarySlip)
  }

  //Adhaar Card
  adhaarCard: any;
  imgAdhaarCard:any;
  onSelectAdhaarCard(event){
    this.adhaarCard = event.target.files[0];
    this.reader.onload=e=>this.imgAdhaarCard=this.reader.result;
    this.reader.readAsDataURL(this.adhaarCard)
  }
//Pan Card
  panCard:any;
  imgPanCard:any;
  onSelectPanCard(event){
    this.panCard = event.target.files[0];
    this.reader.onload=e=>this.imgPanCard=this.reader.result;
    this.reader.readAsDataURL(this.panCard)
  }
//Itr
Itr:any;
imgITR:any;
onSelectITR(event){
  this.Itr = event.target.files[0];
  this.reader.onload=e=>this.imgITR=this.reader.result;
  this.reader.readAsDataURL(this.Itr)
}
//Photo
photo:any;
imgPhoto:any;
onSelectPhoto(event){
  this.photo = event.target.files[0];
  this.reader.onload=e=>this.imgPhoto=this.reader.result;
  this.reader.readAsDataURL(this.photo)
}
//Cancel Bank Cheque
cancelCheque:any;
imgCancelCheque:any;
onSelectCheck(event){
  this.cancelCheque = event.target.files[0];
  this.reader.onload=e=>this.imgCancelCheque=this.reader.result;
  this.reader.readAsDataURL(this.cancelCheque)
}

//Signature
signature:any;
imgSignature:any;
onSelectSignature(event){
  this.signature = event.target.files[0];
  this.reader.onload=e=>this.imgSignature=this.reader.result;
  this.reader.readAsDataURL(this.signature)
}

//Mortgage Property Proof
proof:any;
imgProof:any;
onSelectPropProof(event){
  this.proof = event.target.files[0];
  this.reader.onload=e=>this.imgProof=this.reader.result;
  this.reader.readAsDataURL(this.proof)
}

//Saving Registation from 
saveCustomer() {
  const data=JSON.stringify(this.custRegForm.value);
  const docupload=new FormData();
  docupload.append("occupation.salrySlip",this.salarySlip);
  docupload.append("documents.addharcard",this.adhaarCard);
  docupload.append("documents.pancard",this.panCard);
  docupload.append("documents.lastthreeyearITR",this.Itr);
  docupload.append("documents.photo",this.photo);
  docupload.append("documents.bankcheque",this.cancelCheque);
  docupload.append("documents.signature",this.signature);
  docupload.append("mortagagedetail.mortgagepropertyproof",this.proof);
  docupload.append("data",data);
  this.common.saveCutomer(docupload).subscribe();
  
  //window.location.reload();
}
}
