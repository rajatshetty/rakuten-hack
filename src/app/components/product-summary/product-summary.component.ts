import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, Transactions } from '../../interfaces/Product';
import { BigchaindataService } from '../../services/bigchaindata.service';
import { BigChainRestService } from '../../rest/big-chain-rest.service';
import { concat } from 'rxjs';

@Component({
  selector: 'app-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.css']
})
export class ProductSummaryComponent implements OnInit {

  constructor(private route: ActivatedRoute, public bigchainDB: BigchaindataService, public httpservice: BigChainRestService) {
    this.httpservice.getTransactions("Em5T8m1hACodi485y19zBbEn5mKsE9YgjFQFz7grrz8U").subscribe(data => {
      console.log(data);
    });
  }
  public review: string;
  public product: Product;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.product =  JSON.parse(params["product"]);
    });
  }

  arrayOne(n: number): any[] {
    return Array(n);
  }

  saveReview() {
    let transactionObject = this.createTransactionObject("Hello", this.review);
    this.httpservice.createTransaction(transactionObject).subscribe(data => {
      console.log(data);
    });
    this.httpservice.getpublicKey(this.bigchainDB.username).subscribe(data => {
      let transactionObject = this.createTransactionObject(data, this.review);
    });
  }

  createTransactionObject(token: string, review: string) {
    let transaction: Transactions = {
      id: token,
      operation: "CREATE",
      version: "2.0",
      outputs:  [{
        condition: {
          details:{
            type: "ed25519-sha-256",
            public_key: token
          },
          uri: "ni:///sha-256;71fRKY2F2CYC_ivq4J9HDuS1BEFBf94JMs7-cydjgJ4?fpt=ed25519-sha-256&cost=131072"
        },
        amount: 1,
        public_keys:[token]
      }],
      inputs: [{
      }],
      metadata: {
        action: "Introduced",
        date:""
      },
      asset: {
          type: "FtfTutorialAsset",
          item: this.review
      }
    }

    return transaction;
  }
}
