import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor() {}
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  rows = [1, 2, 3, 4, 5, 6, 7, 8, 9];
}
