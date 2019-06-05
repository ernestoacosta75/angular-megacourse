import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styles: []
})
export class CardComponent implements OnInit {
  @Input() items: any[] = [];
  constructor(private _router: Router) {}

  ngOnInit() {}

  /**
   * Display the artist data
   * @param item Artist ID selected.
   */
  getArtist(item: any) {
    let artistId;

    if (item.type === "artist") {
      artistId = item.id;
    } else if (item.type == "album") {
      artistId = item.artists[0].id;
    }

    console.log(artistId);
    this._router.navigate(["/artist", artistId]);
  }
}
