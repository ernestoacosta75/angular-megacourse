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

  /**
   * Returns a dynamic url builded with the query string.
   * @param query
   */
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQA2zzIO92N8RI-37dRk3SUQClo4dDiZtQ6frKIecmQp_ni7iaYo-7i6DOiJgSAjKOk-NlOSi8jIW8gsdX0"
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

  /**
   * Returns a list of artist according to the term search.
   * @param term
   */
  searchArtists(term: string) {
    return this.getQuery(`search?q=${term}&type=artist&limit=15`).pipe(
      map(data => data["artists"].items)
    );
  }

  /**
   * Returns the info of a single artist.
   * @param id
   */
  getArtist(artistId: string) {
    return this.getQuery(`artists/${artistId}`);
  }
}
