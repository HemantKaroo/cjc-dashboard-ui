import { Cibil } from "./cibil";
import { Currentaddress } from "./currentaddress";
import { Dealeraccountdetails } from "./dealeraccountdetails";
import { Documents } from "./documents";
import { Guarantordetail } from "./guarantordetail";
import { Ledger } from "./ledger";
import { Loandisbursment } from "./loandisbursment";
import { Mortagagedetail } from "./mortagagedetail";
import { Occupation } from "./occupation";
import { Offerletter } from "./offerletter";
import { Permentaddress } from "./permentaddress";
import { Previousloan } from "./previousloan";
import { Sanctionletter } from "./sanctionletter";

export class Customerdetails {
    customerid :number;
customerfirstname: string;
customermiddlename :string;
customerlastname:string;
customerdob:string;
customergender:string;
customeremail:string;
customermobilenumber:number;
customeradditionalmobilenumber:number;
customeramountpaidforcar:number;
customertotalloanrequired:number;
occupation:Occupation;
documents:Documents;
currentaddress:Currentaddress;
permentaddress:Permentaddress;
mortagagedetail:Mortagagedetail;
previousloan:Previousloan;
dealeraccountdetail:Dealeraccountdetails;
guarantordetail:Guarantordetail;
cibil:Cibil;
offerletter:Offerletter;
sanctionletter:Sanctionletter;
ledger:Ledger;
loandisbursment:Loandisbursment;

}
