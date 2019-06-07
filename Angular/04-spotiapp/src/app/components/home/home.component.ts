import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "@app/services/spotify.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent implements OnInit {
  newSongs: any[] = [];
  loading: boolean;
  error: boolean;
  errorMessage: string;

  constructor(private _spotifyService: SpotifyService) {
    this.loading = true;
    this.error = false;

    this._spotifyService.getNewReleasesList().subscribe(
      (data: any) => {
        console.log(data);
        this.newSongs = data;
        this.loading = false;
      },
      errorServizio => {
        this.loading = false;
        this.error = true;
        this.errorMessage = errorServizio.error.error.message;
        console.log(errorServizio);
      }
    );
  }

  ngOnInit() {}
}
