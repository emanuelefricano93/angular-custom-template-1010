import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild
} from "@angular/core";

@Component({
  selector: "hello",
  templateUrl: "./hello.component.html",
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent implements AfterViewInit {
  _customTemplate?: TemplateRef<any>;
  @Output() defaultTemplateEmitter?: EventEmitter<
    TemplateRef<any>
  > = new EventEmitter();

  @ViewChild("defaultTemplate") public defaultTemplate: TemplateRef<any>;

  @Input()
  set customTemplate(template) {
    console.log("setting custom Template");
    this._customTemplate = template;
  }

  get customTemplate() {
    return this._customTemplate;
  }

  ngAfterViewInit() {
    if (this.defaultTemplateEmitter) {
      this.defaultTemplateEmitter.emit(this.defaultTemplate);
    }
  }
}
