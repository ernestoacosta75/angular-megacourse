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
        "Bearer BQAIJcwmRIqmtWO5ncKR01bbnuVKVcdPMlc0_EuVeOFkS7Yt1YjfPCZT4U8SdpQtmXBRaDH3tFhCcbwYzPk"
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
