import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Product } from './product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  
  private productsSource = new BehaviorSubject<Product[]>([]);
  products$ = this.productsSource.asObservable();

  constructor(private http: HttpClient) {}

  loadProducts(): void {
    if (this.productsSource.value.length === 0) {
      this.http.get<any[]>(this.apiUrl).pipe(
        map(posts => posts.slice(0, 10).map(post => ({
          id: post.id,
          name: post.title.split(' ')[0].toUpperCase(),
          code: `SN-${post.id * 1024}`,
          description: post.body
        })))
      ).subscribe(data => this.productsSource.next(data));
    }
  }

  addProduct(product: Partial<Product>): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product).pipe(
      tap(newProduct => {
        const productWithId = { 
          ...newProduct, 
          id: Math.floor(Math.random() * 1000) + 100 
        } as Product;
        
        const currentProducts = this.productsSource.value;
        this.productsSource.next([productWithId, ...currentProducts]);
      })
    );
  }

  getProductById(id: number): Product | undefined {
    return this.productsSource.value.find(p => p.id === id);
  }
}