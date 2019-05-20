import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService, Heroe } from "@app/services/heroes.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
  heroes: Heroe[] = [];
  term: string;

  constructor(
    private _heroesService: HeroesService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.term = params["term"];
      this.heroes = this._heroesService.searchHero(params["term"]);
    });
  }
}
