/**
 * Component for single hero management.
 */
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "@app/services/heroes.service";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html"
})
export class HeroComponent implements OnInit {
  hero: any = {};

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {
    this._activatedRoute.params.subscribe(params => {
      this.hero = this._heroesService.getHero(params["id"]);
    });
  }

  ngOnInit() {}
}
