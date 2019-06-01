import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "@app/services/spotify.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent implements OnInit {
  newSongs: any[] = [];

  constructor(private _spotifyService: SpotifyService) {
    this._spotifyService.getNewReleasesList().subscribe((data: any) => {
      console.log(data);
      this.newSongs = data;
    });
  }

  ngOnInit() {}
}
