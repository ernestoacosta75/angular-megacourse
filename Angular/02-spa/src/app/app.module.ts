import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

//Components
import { AppComponent } from "@app/app.component";
import { NavbarComponent } from "@app/components/shared/navbar/navbar.component";
import { HomeComponent } from "@app/components/home/home.component";
import { AboutComponent } from "@app/components/about/about.component";
import { HeroesComponent } from "@app/components/heroes/heroes.component";
import { HeroComponent } from "@app/components/hero/hero.component";
import { SearchComponent } from "@app/components/search/search.component";

//Services
import { HeroesService } from "@app/services/heroes.service";

//Routes
import { AppRoutingModule } from "@app/app-routing.module";
import { HeroCardComponent } from './components/hero-card/hero-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroComponent,
    SearchComponent,
    HeroCardComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
