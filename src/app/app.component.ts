import { Component, TemplateRef, ViewChild } from "@angular/core";
import { HelloComponent } from "./hello.component";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("customTemplate") customTemplate: TemplateRef<any>;
  @ViewChild("firstHello") helloComponent: HelloComponent;

  onDefaultTemplateReceived(defaultTemplate: TemplateRef<any>): any {
    if (defaultTemplate) {
      console.log("receiving the default template");
      defaultTemplate.elementRef.nativeElement.nextElementSibling.style.background =
        "red";
    }
  }

  setTemplate() {
    setTimeout(() => {
      this.helloComponent.customTemplate = this.customTemplate;
    });
  }
}
