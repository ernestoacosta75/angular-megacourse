import { Component, OnInit } from "@angular/core";
import { HeroesService, Heroe } from "@app/services/heroes.service";
import { Router } from "@angular/router";

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

  /**
   * To get a single hero.
   * @param idx
   */
  getHero(idx: number) {
    this._router.navigate(["/hero", idx]);
  }
}
