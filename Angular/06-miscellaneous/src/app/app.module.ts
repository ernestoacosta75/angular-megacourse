import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Components
import { NgStyleComponent } from '@app/components/ng-style/ng-style.component';
import { CssComponent } from '@app/components/css/css.component';
import { ClassesComponent } from '@app/components/classes/classes.component';
import { NgSwitchComponent } from '@app/components/ng-switch/ng-switch.component';
import { HomeComponent } from './components/home/home.component';

//Directives
import { HighlightedDirective } from '@app/directives/highlighted.directive';
import { DetailsUserComponent } from '@app/components/user/details-user.component';
import { UserModule } from '@app/user/user.module';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    ClassesComponent,
    HighlightedDirective,
    NgSwitchComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
