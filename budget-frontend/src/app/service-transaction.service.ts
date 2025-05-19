import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


const url = ["http://localhost:8087"]


@Injectable({
  providedIn: 'root'
})
export class ServiceTransactionService {

  constructor(private http : HttpClient) {}

  postTransaction(transaction : any): Observable <any>{
   return  this.http.post(url + "/api/transaction", transaction)
  }

  getTransaction(): Observable<any>{
    return this.http.get(url + "/api/transaction")
  }

  deleteTransaction(id : number): Observable <any>{
    return  this.http.delete((`${url}/api/transaction/${id}`));
  }
}
