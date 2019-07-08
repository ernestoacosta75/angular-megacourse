import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Modules
import { AppRoutingModule } from '@app/app-routing.module';

//Components
import { AppComponent } from '@app/app.component';
import { NavbarComponent } from '@app/components/navbar/navbar.component';
import { HomeComponent } from '@app/components/home/home.component';
import { PricesComponent } from '@app/components/prices/prices.component';
import { ProtectedComponent } from '@app/components/protected/protected.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PricesComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
