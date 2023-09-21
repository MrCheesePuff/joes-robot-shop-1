import { Component } from '@angular/core';
import { IProduct } from './product.model';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {

  product: IProduct;

  constructor() {
    this.product = {
      id: 1,
      description: "Some sort of mechanical monstrosity",
      name: "FriendlyBot 4000",
      imageName: "head-friendly.png",
      category: "Heads",
      price: 1299.99,
      discount: 0.3
    }
  }

  getImageUrl(product: IProduct) {
    return '/assets/images/robot-parts/' + product.imageName;
  }
}
