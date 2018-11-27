import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // products = [
  //   {name: 'product 1'}, {name: 'product 2'},
  //   {name: 'product 3'},
  //   {name: 'product 4'},
  //   {name: 'product 5'}
  // ];

  constructor(private http: HttpClient) {
  }

  getProducts() {
   return this.http.get<any[]>('http://localhost:8080/ProductLineup');
  }
}
