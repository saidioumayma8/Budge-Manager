import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceTransactionService } from '../service-transaction.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-transaction',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './get-transaction.component.html',
  styleUrls: ['./get-transaction.component.css']
})
export class GetTransactionComponent implements OnInit {

  transactions : any = [] ;

  constructor(private serviceTransaction: ServiceTransactionService) {}


  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions(): void {
    this.serviceTransaction.getTransaction().subscribe((res: any) => {
      console.log(res);
      this.transactions = res;
    });
  }

  deleteTransaction(id : number){
    this.serviceTransaction.deleteTransaction(id).subscribe((res: any) => {
      console.log(res);
      this.getTransactions();
    });

  }
}
