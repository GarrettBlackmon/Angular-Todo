import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name: string = "angular-todo";

  constructor() {
    this.changeName("john");
  }

  changeName(name: string) {
    this.name = name;
  }
}
