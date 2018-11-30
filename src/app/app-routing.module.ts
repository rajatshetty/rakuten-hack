import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductReviewComponent } from './components/product-review/product-review.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductSummaryComponent } from './components/product-summary/product-summary.component';

const routes: Routes = [
  { path: 'productsummary', component: ProductSummaryComponent },
  { path: 'productlist', component: ProductListComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})



export class AppRoutingModule { }
