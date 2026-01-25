import {
  ChangeDetectionStrategy,
  Component,
  NO_ERRORS_SCHEMA,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NativeScriptCommonModule, RouterExtensions } from '@nativescript/angular';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'ns-product-detail',
  templateUrl: './product-detail.component.html',
  imports: [NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent implements OnInit {
  private productService = inject(ProductService);
  private routerExtensions = inject(RouterExtensions);
  private route = inject(ActivatedRoute);

  product = signal<Product | null>(null);
  isAndroid = __ANDROID__;
  
  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);

    // tymczasowo – pobranie produktu po ID
    const product = this.productService.getProductById(id);
    this.product.set(product);

    console.log(this.product());
  }

  goBack() {
    this.routerExtensions.back();
  }
}

