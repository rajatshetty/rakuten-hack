import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.css']
})
export class ProductSummaryComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  public product: Product;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.product =  JSON.parse(params["product"]);
    });
  }

  arrayOne(n: number): any[] {
    return Array(n);
  }

}
