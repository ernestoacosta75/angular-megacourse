import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HeroesService, Heroe } from "@app/services/heroes.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styles: []
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService, private _router: Router) {
    console.log("Constructor");
  }

  /**
   * It's called when the whole page was rendered.
   */
  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();

    console.log(this.heroes);
  }

  getHero(idx: number) {
    this._router.navigate(["/hero", idx]);
  }
}
