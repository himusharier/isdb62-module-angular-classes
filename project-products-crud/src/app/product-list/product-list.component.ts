import { Component, OnInit } from '@angular/core';
import { Product } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private router: Router) {} 

  ngOnInit() {
    this.products = JSON.parse(localStorage.getItem('products') || '[]');
  }

  updateProduct(product: Product) {
    this.router.navigate(['/product'], {state: { product }});
  }

  deleteProduct(singleProduct: Product) {
    if (confirm('Delete this product?')) {
      this.products = this.products.filter(x => x !== singleProduct);
      localStorage.setItem('products', JSON.stringify(this.products))
    }
  }


}
