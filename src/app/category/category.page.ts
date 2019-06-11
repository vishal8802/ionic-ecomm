import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-category",
  templateUrl: "./category.page.html",
  styleUrls: ["./category.page.scss"]
})
export class CategoryPage implements OnInit {
  constructor() {}

  categories = [
    {
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
      parent: "Fashion",
      childs: ["Footwear", "Clothing", "Watches", "Eyewear"]
    },
    {
      parent: "Home & Furniture",
      childs: ["Beds", "Mattress", "Wardrobes", "Dressing Tables"]
    }
  ];

  current_parent: any;

  load_selected_child(parent: any) {
    let x = this.categories.filter(item => {
      return item.parent == parent;
    });
    console.log(x[0].childs);
    this.current_parent = x[0].childs;
  }

  slideOpts = {
    loop: false,
    slidesPerView: 3
  };
  ngOnInit() {}
}
