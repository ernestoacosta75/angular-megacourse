import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private _httpClient: HttpClient) {
    console.log("Spotify Service ready");
  }

  /**
   * Returns the new releases albums list.
   */
  getNewReleasesList() {
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQDbgWnDLPE-MdL7dJ8Oy4Ldg5BifNZ9FB8CFT8E1ofnwrd7nCSE45YumtXydWVH8o3-EWfCJjLGfaTsvl0"
    });
    return this._httpClient.get(
      "https://api.spotify.com/v1/browse/new-releases",
      {
        headers
      }
    );
  }

  getArtist(term: string) {
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQAFzrRkrwec6QfNnej8tmEI7Xdk8CpBw1YeoProaZuI1SG-QUaPXhd4iP8kp9k2LuFtUbfaLaxKlL8i0Mo"
    });
    return this._httpClient.get(
      `https://api.spotify.com/v1/search?q=${term}&type=artist&limit=15`,
      {
        headers
      }
    );
  }
}
