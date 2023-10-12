import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cibilstatus } from 'app/model/CustomerDetails/cibilstatus';
import { Customerdetails } from 'app/model/CustomerDetails/customerdetails';
import { Loandisbursment } from 'app/model/CustomerDetails/loandisbursment';
import { Mailinfo } from 'app/model/CustomerDetails/mailinfo';
import { Offerletter } from 'app/model/CustomerDetails/offerletter';
import { DocInfo } from 'app/model/doc-info';

import { Empreg } from 'app/model/empreg';
import { Enquirydetails } from 'app/model/enquirydetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  
  
 
 username:string;
  url:string="http://localhost:3000/Enquirydetails";
  url1:string="http://localhost:9090/"
  constructor(private http:HttpClient,private fb:FormBuilder) { }
  getusername(un:string)
  {
    this.username=un;
  }
  addEmpReg(reg:Empreg) 
  {
    
    return this.http.post(this.url1+"empreg",reg);
  } 
  saveEnquiry(newEnq:Enquirydetails) 
  {
    ;
    return this.http.post(this.url1+"enquiry",newEnq);
  }
  getenquirydetails():Observable<Enquirydetails[]>
  {
    
    return this.http.get<Enquirydetails[]>(this.url1+"enquiries");
  }
  getemplist():Observable<Empreg[]> {
   
    return this.http.get<Empreg[]>(this.url1+"empreg");
  }
  saveCutomer(customer:any):Observable<Customerdetails[]>{
    window.location.reload();
    return this.http.post<Customerdetails[]>(this.url1+"reg"+"/"+"saveCustomer",customer);
  }
//View Single Enquiry in Customer Login Account
getsingleenquiry():Observable<Enquirydetails> 
{
 
  
  return this.http.get<Enquirydetails>("http://localhost:9090/singlecustomer/"+this.username);
 // return this.http.get<Enquirydetails>(this.url1+"singlecustomer"+"/"+this.username);
}

//Rajat
getDoc():Observable<Customerdetails[]>  {
  return this.http.get<Customerdetails[]>(this.url1+"reg"+"/"+"getAllDoc")
}
getDocument(custId:number):Observable<Customerdetails> {

  return this.http.get<Customerdetails>(this.url1+"reg"+"/"+"getSingleDoc"+"/"+custId);
}

//Shiwani

getCibil(id:number,pan: string){
   return this.http.get<number>(this.url1+"cibilScore/cibil"+"/"+pan);
  // return 800;
}

//CIbil Status From OH 
 
sendcibilstatus(a:Cibilstatus):Observable<Cibilstatus> 
{
 
  return this.http.post<Cibilstatus>(this.url1+"cibil"+"/"+"cibilstatus",a);
}

getcibilstatusCE():Observable<Cibilstatus[]> {
  return this.http.get<Cibilstatus[]>(this.url1+"cibil"+"/"+"cibilstatus");
}

//Document Status
//http://localhost:3000/DocStatus
dStat:number;
okDocuments(docInfo:DocInfo) {
  return this.http.post("http://localhost:9090/doc/saveDocInfo",docInfo)
}
getDocuments():Observable<DocInfo[]>{
  
  return this.http.get<DocInfo[]>("http://localhost:9090/doc/getDocList")}

getDoc1(id: number):Observable<DocInfo> {
  return this.http.get<DocInfo>("http://localhost:9090/doc/getDoc/"+id)
}
//Offer Latter
saveOfferlatter(ol: Offerletter,num:number): Observable<Offerletter> {
 
  return this.http.post<Offerletter>(this.url1+"offer/postoffer/"+num,ol);
}

getOfferlatter(): Observable<Offerletter[]> {
  return this.http.get<Offerletter[]>(this.url1+"offer/getoffer");
}

getOfferSingle(currentloanid:number):Observable<Offerletter>{
  return this.http.get<Offerletter>(this.url1+"offer/getoffer/"+currentloanid);
}
senddata(data:any):Observable<Mailinfo[]>
  {
    
    return this.http.post<Mailinfo[]>(this.url1+"email/sendAttachEmail",data);
  }

  //Set Email Status in CM login
  setemailstatus(num: number) {
    return this.http.get(this.url1+"email/setemailstatus/"+num);
  }

  abc(num:number)
  {
    
    return this.http.get(this.url1+"email/setsactionstatus/"+num);
  }
//Rajat
  saveDis(ol:Loandisbursment,num:number): Observable<Loandisbursment> {
 
    
    
    return this.http.post<Loandisbursment>(this.url1+"loandis/saveloanData/"+num,ol); 
  }

  //add default Counter
addCounter(custId:number,count:number){
  return this.http.get(this.url1+"reg/addCount/"+custId+"/"+count);
}

}
