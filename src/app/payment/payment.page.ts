import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";

import * as $ from "jquery";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.page.html",
  styleUrls: ["./payment.page.scss"]
})
export class PaymentPage implements OnInit {
  @ViewChild("expand", { read: ElementRef }) expand: ElementRef;

  constructor(private renderer: Renderer2) {}

  Expand() {
    console.log("Expand called");
    // console.log(this.expand);
    // this.renderer.setStyle(this.expand.nativeElement, "height", "100px");
    $("h6").animate(
      {
        color: "red"
      },
      2000
    );
  }

  ngOnInit() {}
}
