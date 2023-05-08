﻿import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { SwiperOptions } from 'swiper';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
SwiperCore.use([Autoplay, Navigation, Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  loading = true;
  error = false;
  products!: Product[];

  constructor(
    private productService: ProductService,
    private snackBar: MatSnackBar,
    private cartService: CartService,
    private titleService: Title
  ) {
    this.titleService.setTitle('Lensmakers - Your one stop destination for all kinds of eyewear');
  }

  config: SwiperOptions = {
    autoplay: {
      delay: 3000, // interval in ms between slide change
      disableOnInteraction: false, // whether to stop autoplay when user interacts with swiper
    },
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (products: Product[]) => {
        this.loading = false;
        this.products = products;
      },
      (err) => {
        this.loading = false;
        this.error = true;
        this.snackBar.open(err, '', { panelClass: 'error-snackbar' });
      }
    );
  }

  addToCart(product: Product) {
    const { _id, image, name, slug, price } = product;
    this.cartService
      .add({ _id, image, name, slug, price, quantity: 1 })
      .subscribe(
        (productName) =>
          this.snackBar.open(`${productName} added to the cart`, '', {
            panelClass: 'success-snackbar',
          }),
        (err) => {
          this.snackBar.open(err.message, '', { panelClass: 'error-snackbar' });
        }
      );
  }
  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
