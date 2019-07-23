import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  appPages = [
    {
      title: "Home",
      url: "/home",
      icon: "home"
    },
    {
      title: "Category",
      url: "/category",
      icon: "category"
    },
    { title: "list", url: "/list", icon: "list" }
  ];
  goToLogin() {
    console.log("Login");
    this.router.navigate(["login"]);
  }
  public catogeries = [
    "Electronics",
    "Fashion",
    "Home and Furniture",
    "Beauty and Personal Care",
    "Refurbished",
    "Recharges"
  ];

  constructor(
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
