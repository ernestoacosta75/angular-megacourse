import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "@app/components/home/home.component";
import { AboutComponent } from "@app/components/about/about.component";
import { HeroesComponent } from "@app/components/heroes/heroes.component";
import { HeroComponent } from "@app/components/hero/hero.component";
import { SearchComponent } from "@app/components/search/search.component";

const APP_ROUTING: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "heroes", component: HeroesComponent },
  { path: "hero/:id", component: HeroComponent },
  { path: "search/:term", component: SearchComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTING)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
