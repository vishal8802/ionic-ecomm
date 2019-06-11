import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product",
  templateUrl: "./product.page.html",
  styleUrls: ["./product.page.scss"]
})
export class ProductPage implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.category = params["sub_category"] || 0;
    });
  }
  rows = new Array(10);
  category: any;
  show_details(event: any) {
    this.router.navigate(["product-detail"], {
      queryParams: { product: event.target }
    });
  }

  ngOnInit() {}
}
