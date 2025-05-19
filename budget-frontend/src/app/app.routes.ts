import { Routes } from '@angular/router';
import {PostTransactionComponent} from './post-transaction/post-transaction.component';
import {GetTransactionComponent} from './get-transaction/get-transaction.component';

export const routes: Routes = [
  { path: 'post-transaction', component: PostTransactionComponent },
  { path: 'get-transaction', component: GetTransactionComponent },
  { path: '', redirectTo: '/get-transaction', pathMatch: 'full' }
];
