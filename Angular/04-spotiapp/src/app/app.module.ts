import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

//Routes
import { AppRoutingModule } from "@app/app-routing.module";

//Components
import { AppComponent } from "@app/app.component";
import { HomeComponent } from "@app/components/home/home.component";
import { SearchComponent } from "@app/components/search/search.component";
import { ArtistComponent } from "@app/components/artist/artist.component";
import { NavbarComponent } from "@app/components/shared/navbar/navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}