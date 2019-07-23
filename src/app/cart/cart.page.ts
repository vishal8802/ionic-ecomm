import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.page.html",
  styleUrls: ["./cart.page.scss"]
})
export class CartPage implements OnInit {
  constructor(private router: Router) {}

  gotoCheckOut() {
    this.router.navigate(["checkout"]);
  }
  ngOnInit() {}
}
