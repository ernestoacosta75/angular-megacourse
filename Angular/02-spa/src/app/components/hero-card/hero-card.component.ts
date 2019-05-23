import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { HeroesService } from "@app/services/heroes.service";

@Component({
  selector: "app-hero-card",
  templateUrl: "./hero-card.component.html"
})
export class HeroCardComponent implements OnInit {
  @Input() hero: any = {};
  @Input() idx: number;
  @Output() heroSelected: EventEmitter<number>;

  constructor(
    private _heroesService: HeroesService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    this.heroSelected = new EventEmitter();
  }

  ngOnInit() {}

  /**
   * To get a single hero.
   */
  getHero() {
    this._router.navigate(["/hero", this.idx]);
    //this.heroSelected.emit(this.idx);
  }
}
