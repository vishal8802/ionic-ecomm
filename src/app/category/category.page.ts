import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-category",
  templateUrl: "./category.page.html",
  styleUrls: ["./category.page.scss"]
})
export class CategoryPage implements OnInit {
  constructor(private router: Router) {}

  categories = [
    {
      id: 1,
      parent: "Electronics",
      childs: [
        "Laptops",
        "Mobile Accessories",
        "Televisions",
        "Laptops",
        "Mobile Accessories",
        "Televisions"
      ]
    },
    {
      id: 2,
      parent: "Fashion",
      childs: ["Footwear", "Clothing", "Watches", "Eyewear"]
    },
    {
      id: 3,
      parent: "Home & Furniture",
      childs: ["Beds", "Mattress", "Wardrobes", "Dressing Tables"]
    },
    {
      id: 4,
      parent: "Fashion",
      childs: ["Footwear", "Clothing", "Watches", "Eyewear"]
    },
    {
      id: 5,
      parent: "Fashion",
      childs: ["Footwear", "Clothing", "Watches", "Eyewear"]
    },
    {
      id: 6,
      parent: "Fashion",
      childs: ["Footwear", "Clothing", "Watches", "Eyewear"]
    },
    {
      id: 7,
      parent: "Fashion",
      childs: ["Footwear", "Clothing", "Watches", "Eyewear"]
    }
  ];

  current_parent: any = this.categories[0].childs;

  load_selected_child(event: any) {
    let x = this.categories.filter(item => {
      return item.parent == event.target.textContent;
    });
    this.current_parent = x[0].childs;
  }

  get_selected_category_products(event: any) {
    this.router.navigate(["product"], {
      queryParams: { sub_category: event.target.textContent }
    });
  }

  slideOpts = {
    loop: false,
    slidesPerView: 3
  };
  ngOnInit() {}
}
