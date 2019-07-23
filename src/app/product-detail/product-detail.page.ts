import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.page.html",
  styleUrls: ["./product-detail.page.scss"]
})
export class ProductDetailPage implements OnInit {
  constructor() {}
  x = new Array(5);

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  ngOnInit() {}
}
