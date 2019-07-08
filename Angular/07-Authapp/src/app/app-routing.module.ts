import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@app/components/home/home.component';
import { PricesComponent } from '@app/components/prices/prices.component';
import { ProtectedComponent } from '@app/components/protected/protected.component';

const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'prices', component: PricesComponent},
  {path: 'protected', component: ProtectedComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
