import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor(private router: Router) {}
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  redirect() {
    this.router.navigate(["cart"]);
  }

  rows = [1, 2, 3, 4, 5, 6, 7, 8, 9];
}
