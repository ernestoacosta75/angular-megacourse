import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "@app/services/spotify.service";

@Component({
  selector: "app-artist",
  templateUrl: "./artist.component.html",
  styles: []
})
export class ArtistComponent implements OnInit {
  artist: any = {};
  loading: boolean;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _spotifiyService: SpotifyService
  ) {
    this._activatedRoute.params.subscribe(params => {
      this.getArtist(params["id"]);
    });
  }

  ngOnInit() {}

  /**
   * Returns the info of a single artist.
   * @param id
   */
  getArtist(id: string) {
    this.loading = true;

    this._spotifiyService.getArtist(id).subscribe(artist => {
      this.artist = artist;
      this.loading = false;
    });
  }
}
