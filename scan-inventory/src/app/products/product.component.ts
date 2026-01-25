import { Component, ChangeDetectionStrategy, NO_ERRORS_SCHEMA, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'ns-product',
  templateUrl: './product.component.html',
  imports: [NativeScriptCommonModule, NativeScriptRouterModule],
  schemas: [NO_ERRORS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  productService = inject(ProductService);
  private cdr = inject(ChangeDetectorRef); // Wymagane dla ChangeDetectionStrategy.OnPush
  products: Product[] = [];

  ngOnInit(): void {
    // Zmień wywołanie z getProducts() na products$
    this.productService.products$.subscribe(data => {
      this.products = data;
      this.cdr.markForCheck(); // Ważne przy OnPush!
    });

    // Wywołaj inicjalizację danych, jeśli Twój serwis tego wymaga
    if (this.productService.loadProducts) {
       this.productService.loadProducts();
    }
  }
}
