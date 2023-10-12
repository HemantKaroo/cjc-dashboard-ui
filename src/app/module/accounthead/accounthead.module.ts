import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountheadviewComponent } from './accountheadview/accountheadview.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoandisburgmentComponent } from './loandisburgment/loandisburgment.component';
import { LedgerComponent } from './ledger/ledger.component';
import { LedgerDetailsComponent } from './ledger-details/ledger-details.component';




const ahrouting: Routes = [
  {path: "acchead", component:AccountheadviewComponent, children:[
    {
      path: "loandisform/:customerId", component:LoandisburgmentComponent
    }
  ]
},
{path:'viewLedger', component:LedgerComponent,
children:[
  {
    path:'ledgerDetails/:customerid',component:LedgerDetailsComponent,
  }
]
},
];

@NgModule({
  declarations: [AccountheadviewComponent, LoandisburgmentComponent, LedgerComponent, LedgerDetailsComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    RouterModule.forChild(ahrouting)
  ]
})
export class AccountheadModule { }
