import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { LOCALE_ID } from "@angular/core";

//Components
import { AppComponent } from "@app/app.component";

//Pipes
import { CapitalizePipe } from "@app/pipes/capitalize.pipe";
import { SafedomPipe } from "@app/pipes/safedom.pipe";

import localesEs from "@angular/common/locales/es";
import { registerLocaleData } from "@angular/common";
import { PwdPipe } from './pipes/pwd.pipe';

registerLocaleData(localesEs);

@NgModule({
  declarations: [AppComponent, CapitalizePipe, SafedomPipe, PwdPipe],
  imports: [BrowserModule],
  providers: [{ provide: LOCALE_ID, useValue: "es" }],
  bootstrap: [AppComponent]
})
export class AppModule {}
