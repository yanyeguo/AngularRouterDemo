import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private productId: number;
  private productName: string;
  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.productId = this.actRoute.snapshot.queryParams['id'];
    // this.productId = this.actRoute.snapshot.params['id'];
    // this.actRoute.params.subscribe((params: Params) => this.productId = params['id']);
    this.actRoute.data.subscribe((data: { product: Product }) => {
      this.productId = data.product.id;
      this.productName = data.product.name;
    });

  }

}
export class Product {
  constructor(
    public id: number,
    public name: string
  ) { }
}
