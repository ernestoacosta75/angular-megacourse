import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "@app/components/home/home.component";
import { SearchComponent } from "@app/components/search/search.component";
import { ArtistComponent } from "./components/artist/artist.component";

const APP_ROUTING: Routes = [
  { path: "home", component: HomeComponent },
  { path: "search", component: SearchComponent },
  { path: "artist/:id", component: ArtistComponent },
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(APP_ROUTING, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
