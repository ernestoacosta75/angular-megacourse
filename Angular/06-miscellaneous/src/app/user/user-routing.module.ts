import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from '@app/components/user/user.component';
import { NewUserComponent } from '@app/components/user/new-user.component';
import { EditUserComponent } from '@app/components/user/edit-user.component';
import { DetailsUserComponent } from '@app/components/user/details-user.component';

const USER_ROUTES: Routes = [
  {
    path: 'user', 
    component: UserComponent,
    children: [
      {
        path: 'new-user',
        component: NewUserComponent
      },
      {
        path: 'edit-user',
        component: EditUserComponent
      },
      {
        path: 'details-user',
        component: DetailsUserComponent
      }            
    ]}

];

@NgModule({
  imports: [RouterModule.forChild(USER_ROUTES)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
