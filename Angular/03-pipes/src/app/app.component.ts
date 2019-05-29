import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "pipes";

  name = "Ernesto";

  name2 = "ernesTO antoNio rodriguEZ acOsta";

  numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI = Math.PI;

  aNumber = 0.234;

  salary = 1234.5;

  hero = {
    name: "Logan",
    key: "Wolverine",
    age: 500,
    address: {
      street: "First",
      home: "19"
    }
  };

  promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Info arrived!"), 3500);
  });

  dateInfo = new Date();

  video = "khGiBklJiPg";

  toActivate = true;
}
