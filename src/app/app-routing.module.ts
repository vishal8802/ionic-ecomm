import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: "./home/home.module#HomePageModule"
  },
  {
    path: "list",
    loadChildren: "./list/list.module#ListPageModule"
  },
  {
    path: "category",
    loadChildren: "./category/category.module#CategoryPageModule"
  },

  { path: "login", loadChildren: "./login/login.module#LoginPageModule" },
  { path: "signup", loadChildren: "./signup/signup.module#SignupPageModule" },
  {
    path: "product",
    loadChildren: "./product/product.module#ProductPageModule"
  },
  {
    path: "product-detail",
    loadChildren:
      "./product-detail/product-detail.module#ProductDetailPageModule"
  },
  {
    path: "payment",
    loadChildren: "./payment/payment.module#PaymentPageModule"
  },
  { path: "cart", loadChildren: "./cart/cart.module#CartPageModule" },
  {
    path: "checkout",
    loadChildren: "./checkout/checkout.module#CheckoutPageModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
