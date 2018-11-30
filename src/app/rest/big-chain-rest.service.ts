import { Injectable } from '@angular/core';
import { Product, Transactions } from '../interfaces/Product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BigChainRestService {
  server: string;

  constructor(private http: HttpClient) {
    this.server = "http://104.211.208.85:9984/api/v1";
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getTransactions(publickey: string) {
    return this.http.get<Transactions>(this.server+"/outputs?public_key=" + publickey+"&spent=false");
  }
  
  getTransactionData(transactionid: string) {
    return this.http.get<any>(this.server +"/transactions/"+transactionid);
  }

  createTransaction(transaction: any): Observable<any> {
    return this.http.post<any>(this.server+"/transactions?mode=commit", transaction, this.httpOptions).pipe(x => x);
  }

  getAllassets(searchString: any) {
    return this.http.get<any>(this.server + "/v1/assets?search=" + searchString);
  }

  getpublicKey(seed: string) {
    return this.http.get<any>(seed);
  }
}
