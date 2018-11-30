import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { MOCKPRODUCTS } from '../../mocks/mock-data';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(private router: Router) { }
  products: Product[];
  ngOnInit() {
    this.products = MOCKPRODUCTS;
  }

  navigateToSummary(product: Product) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "product": JSON.stringify(product)
      }
    };
    this.router.navigate(['productsummary'], navigationExtras);
  }
}
