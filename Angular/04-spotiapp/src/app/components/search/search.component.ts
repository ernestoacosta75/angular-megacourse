import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "@app/services/spotify.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styles: []
})
export class SearchComponent implements OnInit {
  artists: any[] = [];

  constructor(private _spotifyService: SpotifyService) {}

  /**
   *
   * @param term Returns a list of artists according to the term.
   */
  search(term: string) {
    this._spotifyService.getArtist(term).subscribe((data: any) => {
      console.log(data.artists.items);
      this.artists = data.artists.items;
    });
  }

  ngOnInit() {}
}
