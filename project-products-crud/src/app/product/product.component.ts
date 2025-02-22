import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../app.component';

@Component({
  selector: 'app-product',
  imports: [FormsModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductFormComponent {
  product: Product = new Product(0, '', 0, 0, new Date(), new Date(), '', '');
  isUpdate = false;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state && nav.extras.state['product']) {
      this.product = nav.extras.state['product'];
      this.isUpdate = true;
    }
  }

  onSubmit() {
    let products: Product[] = JSON.parse(localStorage.getItem('products') || '[]');

    if (this.isUpdate) {
      products = products.map(p => p.product_id === this.product.product_id ? this.product : p);
    } else {
      const newProductId = products.length > 0 ? Math.max(...products.map(p => p.product_id)) + 1 : 1;
      this.product.product_id = newProductId;
      products.push(this.product);
    }

    localStorage.setItem('products', JSON.stringify(products));

    this.product = new Product(0, '', 0, 0, new Date(), new Date, '', '');

    if (this.isUpdate) {
      alert('Product updated successfully!');
    } else {
      alert('Product added successfully!');
    }

    this.router.navigate(['/product-list']);
  }
}
