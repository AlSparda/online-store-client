import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  constructor() { }

  @Input() product

  ngOnInit() {
  }

}
