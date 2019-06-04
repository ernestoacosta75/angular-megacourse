import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private _httpClient: HttpClient) {
    console.log("Spotify Service ready");
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQC9STdL5r0o6dKoaHLgK-OoprjogJpsSk4vwj-BV5aDYeY2-7O0cZAaUi_h97VU5TRevxAFAXJl1dontDM"
    });

    return this._httpClient.get(url, { headers });
  }

  /**
   * Returns the new releases albums list.
   */
  getNewReleasesList() {
    return this.getQuery("browse/new-releases").pipe(
      map(data => data["albums"].items)
    );
  }

  getArtist(term: string) {
    return this.getQuery(`search?q=${term}&type=artist&limit=15`).pipe(
      map(data => data["artists"].items)
    );
  }
}
