import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../Product';
import { ProductsService } from '../../services/products.service';
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

product: Product = {
  name: "",
  country: "",
  price: 0
};

  constructor(public router: Router, public productsService: ProductsService, public flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }

submitProduct({value, valid}: {value: Product, valid: boolean}) {
  if(!valid) {
    this.flashMessagesService.show('Please enter valid info', { cssClass: 'alert-danger'});
    this.router.navigate(['addproduct']);
  } else {
    this.productsService.addProduct(value);
    this.flashMessagesService.show('New product added successfully!', { cssClass: 'alert-success', timeout: 6000});
    this.router.navigate(['/']);
  }
}

}
