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
        "Bearer BQC9LC1HllhEPLjFoW-YntoJXOrh4m73F5xpoM-5hcRYzQpwNcJrJm8DWZa_hvlrNd2f7F7TiFu-ZaV1j4s"
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

  /**
   * Returns the top tracks list of an artist.
   * @param id
   */
  getArtistTopTracks(artistId: string) {
    return this.getQuery(`artists/${artistId}/top-tracks?country=us`).pipe(
      map(data => data["tracks"])
    );
  }
}
