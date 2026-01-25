import { Routes } from '@angular/router';
import { ProductComponent } from './products/product.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { AddProductComponent } from './products/add-product.component'; 

export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'add-product', component: AddProductComponent }, 
];
