import { Component } from '@angular/core';
import { ServiceTransactionService } from '../service-transaction.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-transaction',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './post-transaction.component.html',
  styleUrl: './post-transaction.component.css'
})
export class PostTransactionComponent {
  postTransactionForm!: FormGroup;

  constructor(
    private serviceTransaction: ServiceTransactionService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.postTransactionForm = this.fb.group({
      montant: [null, [Validators.required]],
      categorie: [null, [Validators.required]],
      date: [null, [Validators.required]],
      description: [null, [Validators.required]]
    });
  }

  postTransaction() {
    console.log(this.postTransactionForm.value);
    this.serviceTransaction.postTransaction(this.postTransactionForm.value).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl('/get-transaction');
    });
  }
}
