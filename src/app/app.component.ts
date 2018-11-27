import {Component, OnInit} from '@angular/core';
import {ProductService} from './card-product/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {


  constructor(private productService: ProductService) {
  }

  public products: Array<any>;

  ngOnInit() {
  }

  loadProduct() {
   this.productService.getProducts().subscribe(value => this.products = value);
  }
}
