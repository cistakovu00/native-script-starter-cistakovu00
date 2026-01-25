import {
  ChangeDetectionStrategy,
  Component,
  NO_ERRORS_SCHEMA,
  inject,
} from '@angular/core';
import { NativeScriptCommonModule, RouterExtensions, NativeScriptFormsModule} from '@nativescript/angular';
import { FormsModule } from '@angular/forms';
import { BarcodeScanner } from 'nativescript-barcodescanner';
import { ProductService } from './product.service';

@Component({
  selector: 'ns-add-product',
  templateUrl: './add-product.component.html',
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    FormsModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AddProductComponent {
  private scanner = new BarcodeScanner();
  private productService = inject(ProductService);
  private router = inject(RouterExtensions);

  name = '';
  code = '';
  description = '';

  onScan() {
    this.scanner.scan({
      formats: "EAN_13, QR_CODE",
      cancelLabel: "EXIT",
      message: "Place the barcode inside the scan area",
      showFlipCameraButton: true,
    }).then((result) => {
      this.code = result.text; // Kod ze skanera ląduje w polu formularza!
    }).catch(err => console.error("Scan error: ", err));
  }

  onSave() {
    if (this.name && this.code) {
      this.productService.addProduct({ 
        name: this.name, 
        code: this.code, 
        description: this.description 
      }).subscribe(() => {
        alert("Product added successfully!");
        this.router.back();
      });
    }
  }
}