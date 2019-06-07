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
  artistTopTracks: any[] = [];
  loading: boolean;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _spotifiyService: SpotifyService
  ) {
    this._activatedRoute.params.subscribe(params => {
      this.getArtist(params["id"]);
      this.getArtistTopTracks(params["id"]);
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

  /**
   * Returns the top tracks list of an artist.
   * @param id
   */
  getArtistTopTracks(id: string) {
    this.loading = true;

    this._spotifiyService.getArtistTopTracks(id).subscribe((topTracks: any) => {
      console.log(topTracks);
      this.artistTopTracks = topTracks;
      this.loading = false;
    });
  }
}
